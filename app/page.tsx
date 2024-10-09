"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Maximize2, Download, Palette } from 'lucide-react';
import ColorScreen from '@/components/ColorScreen';
import ColorPicker from '@/components/ColorPicker';

const colorOptions = [
  { name: 'Yellow screen', color: '#FFFF00', slug: 'yellow-screen' },
  { name: 'Orange screen', color: '#FFA500', slug: 'orange-screen' },
  { name: 'Pink screen', color: '#FFC0CB', slug: 'pink-screen' },
  { name: 'Purple screen', color: '#800080', slug: 'purple-screen' },
  { name: 'Zoom Lighting', color: '#FFDAB9', slug: 'zoom-lighting' },
  { name: 'White screen', color: '#FFFFFF', slug: 'white-screen' },
  { name: 'Black screen', color: '#000000', slug: 'black-screen' },
  { name: 'Red screen', color: '#FF0000', slug: 'red-screen' },
  { name: 'Green screen', color: '#00FF00', slug: 'green-screen' },
  { name: 'Blue screen', color: '#0000FF', slug: 'blue-screen' },
];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [customColor, setCustomColor] = useState('#FFFFFF');
  const [resolution, setResolution] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const colorSlug = searchParams.get('color');
    if (colorSlug) {
      const selectedOption = colorOptions.find(option => option.slug === colorSlug);
      if (selectedOption) {
        setSelectedColor(selectedOption.color);
        setCustomColor(selectedOption.color);
      }
    }
  }, [searchParams]);

  const handleColorSelect = (color: string, slug: string) => {
    setSelectedColor(color);
    setCustomColor(color);
    router.push(`/?color=${slug}`);
  };

  const handleCustomColorChange = (color: string) => {
    setCustomColor(color);
    setSelectedColor(color);
    router.push(`/?color=${encodeURIComponent(color)}`);
  };

  const handleResolutionChange = (e) => {
    const [width, height] = e.target.value.split('x').map(Number);
    setResolution({ width, height });
  };

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = resolution.width;
    canvas.height = resolution.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = selectedColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const link = document.createElement('a');
    link.download = `color-${selectedColor.substring(1)}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Color Tool</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Color Presets</h2>
          <div className="space-y-2">
            {colorOptions.map((option) => (
              <Link key={option.slug} href={`/${option.slug}`}>
                <ColorScreen
                  name={option.name}
                  color={option.color}
                  onClick={() => handleColorSelect(option.color, option.slug)}
                  isSelected={selectedColor === option.color}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Color Preview</h2>
            <div className="relative flex-grow aspect-video bg-white rounded-lg shadow-lg overflow-hidden mb-4">
              <div
                id="color-preview"
                className="absolute inset-0 transition-colors duration-500"
                style={{ backgroundColor: selectedColor }}
              ></div>
              <button
                className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
                onClick={() => {
                  const previewElement = document.getElementById('color-preview');
                  if (previewElement) {
                    if (previewElement.requestFullscreen) {
                      previewElement.requestFullscreen();
                    } else if (previewElement.webkitRequestFullscreen) {
                      previewElement.webkitRequestFullscreen();
                    } else if (previewElement.msRequestFullscreen) {
                      previewElement.msRequestFullscreen();
                    }
                  }
                }}
              >
                <Maximize2 size={24} />
              </button>
            </div>
            <div className="mt-auto">
              <h3 className="text-xl font-semibold mb-2">Export Options</h3>
              <div className="flex items-center space-x-4 mb-4">
                <select
                  className="flex-grow p-2 border rounded"
                  onChange={handleResolutionChange}
                  value={`${resolution.width}x${resolution.height}`}
                >
                  <option value="1920x1080">1080p (1920x1080)</option>
                  <option value="1280x720">720p (1280x720)</option>
                  <option value="3840x2160">4K (3840x2160)</option>
                </select>
                <button
                  className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                  onClick={handleDownload}
                >
                  <Download size={20} />
                  <span>Download</span>
                </button>
              </div>
              <div className="flex justify-between">
                <input
                  type="number"
                  className="w-24 p-2 border rounded"
                  value={resolution.width}
                  readOnly
                />
                <span className="self-center">x</span>
                <input
                  type="number"
                  className="w-24 p-2 border rounded"
                  value={resolution.height}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <ColorPicker
            color={customColor}
            onChange={handleCustomColorChange}
          />
        </div>
      </div>
    </div>
  );
}