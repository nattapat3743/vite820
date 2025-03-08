const Tech = ({isHighLight, data}) => {
    return (
      <div>
        <div className="flex gap-2 text-sm">
            {
              data.map((e, i) =>(
                <div key={`${e}-tech-${i}`} className={`bg-primaryTitle px-2 py-1 rounded-md ${isHighLight ? "text-gray-200" : ""}`}>{e}</div>
              ))
            }
        </div>
      </div>
    )
  }
  
  export default Tech; 