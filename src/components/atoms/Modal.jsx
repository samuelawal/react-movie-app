import { IMG_PATH } from "../../constants";
const Modal = ({ isOpen, onClose, movie_title, children, poster_path }) => {
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 mt-10 z-20 flex  justify-center'>
          <div className='fixed inset-0 bg-black opacity-75'></div>
          <div className='bg-slate-800 w-2/3  rounded-md shadow-md max-h-screen overflow-y-auto z-50'>
            <div
              className='w-full h-5/6'
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.75)),url(${
                  IMG_PATH + poster_path
                })`,
                backgroundPosition: "50% 30%",
              }}
            >
              <div className='p-5  more_info_title_contiainer '>
                <h1 className='more_info_title'>{movie_title}</h1>
              </div>
            </div>
            {children}
            {/* <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={onClose}
              >
                Close
              </button> */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, eius rem iusto voluptatem qui neque harum, eveniet earum
            illo cupiditate, officia voluptatibus! Odio error esse magni
            accusantium aperiam laboriosam vel, ad voluptates in delectus dolor
            expedita nulla rem, nemo placeat, perspiciatis non ipsum magnam?
            Dolores ab quo esse aperiam, amet eveniet. Doloribus in aspernatur
            ex at ducimus, odio accusamus dolores error nisi labore consectetur
            repellat soluta modi, maxime necessitatibus inventore sequi fuga
            cupiditate eius. Eos ipsa accusamus a consectetur ea, amet tempore
            praesentium nobis corporis ad labore eaque quidem soluta nam,
            delectus consequatur sint rem sed fuga et quibusdam. Necessitatibus.
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
