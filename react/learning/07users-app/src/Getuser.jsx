function Getuser(props) {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <>
          <div className="w-1/3 flex justify-center items-center flex-col mb-4 p-4 ">
            <div className="shadow-md w-full flex justify-center items-center flex-col">
              <div className="mb-2 font-bold">
                {props.data.first_name} {props.data.last_name}
              </div>
              <img src={props.data.avatar} className="mb-2" />
              <div>{props.data.email}</div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Getuser;
