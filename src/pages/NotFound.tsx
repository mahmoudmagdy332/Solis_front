function NotFound() {
  return (
    <div className="flex flex-col bg-black h-[100vh] items-center justify-center">
      <h1 className="text-[200px] md:text-[300px]   font-[900] font-sans text-white">
        404
      </h1>
      <p className="text-[25px] p-4  md:text-[40px]  font-semibold font-serif text-white">
        The page you were looking for is not here!
      </p>
    </div>
  );
}

export default NotFound;
