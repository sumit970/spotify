import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  const genereTitle = "pop";
  console.log(genres);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-between w-full mt-4 mb-10 sm:flex-row"></div>
        <h2 className="text-3xl font-bold text-left text-white ">
          Discover{genereTitle}
        </h2>
        <select
          onchange={() => {}}
          value=""
          className="p-3 mt-5 text-sm text-gray-300 bg-black rounded-lg outline-none sm:mt-0 "
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((song) => (
        //   <songcard key={song.key} song={song} i={i}></songcard>
        ))} */}
      </div>
    </>
  );
};

export default Discover;
