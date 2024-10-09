export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Color Tool</h1>
      <p className="mb-4">
        Color Tool is a simple web application designed to help users pick and visualize colors easily. Our tool provides a user-friendly interface for selecting colors and seeing them in action.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Interactive color picker</li>
        <li>Real-time color preview</li>
        <li>Fullscreen color display</li>
        <li>URL updates for easy sharing</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Creators</h2>
      <p>
        Color Tool was created by a team of passionate developers who wanted to make color selection and visualization easier for everyone. Whether you're a designer, developer, or just someone who loves colors, we hope you find our tool useful!
      </p>
    </div>
  );
}