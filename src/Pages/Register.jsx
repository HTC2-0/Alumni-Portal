const SignUp = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex justify-center h-screen items-center">
          <form
            action=""
            className="h-[500px] w-[500px] bg-gray-300 shadow-lg rounded-lg"
          >
            <h1 className="text-slate-700 text-center text-xl mt-5">
              Registration Form
            </h1>

            <div className="flex flex-col gap-5 justify-center items-center">
              <div className="flex flex-row justify-center items-center gap-3">
                <input
                  placeholder="Roll Number"
                  type="text"
                  name="name"
                  className="outline-none  p-2 rounded"
                />

                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  className="outline-none  p-2 rounded"
                />
              </div>
              <div className="flex flex-row justify-center items-center gap-3">
                <input
                  type="text"
                  name="name"
                  className="outline-none  p-2 rounded"
                />

                <input
                  type="text"
                  name="name"
                  className="outline-none  p-2 rounded"
                />
              </div>
              <div className="flex flex-row justify-center items-center gap-3">
                <input
                  type="text"
                  name="name"
                  className="outline-none  p-2 rounded"
                />

                <input
                  type="text"
                  name="name"
                  className="outline-none  p-2 rounded"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
