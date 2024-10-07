type DownLiteType={
  category:{
      name:string;
      num:number
  }
}

function DownLite({category}:DownLiteType) {
  return (
    <div className="p-4 bg-black flex flex-col justify-between">
      <p className="text-white">{category.name}</p>
      <p className="text-white">{category.num} product lines</p>
    </div>
  );
}

export default DownLite;
