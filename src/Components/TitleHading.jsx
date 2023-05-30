const TitleHading = ({ hading, subHading }) => {
  return (
    <div className="w-4/12 mx-auto text-center py-8">
      <p className="text-yellow-600 py-2">---{subHading}---</p>
      <h1 className="text-3xl uppercase border-y-2 py-4 font-medium">
        {hading}
      </h1>
    </div>
  );
};

export default TitleHading;
