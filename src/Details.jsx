function Details({ title, text }) {
  return (
    <details className="w-48 rounded-lg border-2 border-gray-500 bg-white p-4">
      <summary className="font-medium cursor-pointer">{title}</summary>
      <p className="text-stone-700">{text}</p>
    </details>
  );
}

export default Details;
