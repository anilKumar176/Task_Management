const ErrorState = () => {
  return (
    <div className="text-center p-10 bg-white rounded shadow">
      <h2 className="text-red-500 font-semibold text-lg">
        Something went wrong
      </h2>
      <p className="text-gray-500">Please try again later</p>
    </div>
  );
};

export default ErrorState;