const Loading = () => {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-gray-200 h-16 rounded animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Loading;