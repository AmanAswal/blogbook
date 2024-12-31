import { AiOutlineDelete } from "react-icons/ai";
import { VscEdit } from "react-icons/vsc";

const JournalCard = () => {
  return (
    <div className="w-[40vw] rounded-lg shadow-md border border-slate-600 bg-slate-100 m-4">
        <div className="flex gap-2 justify-between m-1">
          <h2 className="font-bold text-2xl mb-2 mx-3 hover:scale-105 transition-all cursor-pointer">Title of journal</h2>
          <div className="flex gap-2 my-1">
            <AiOutlineDelete size={20} className="cursor-pointer hover:text-red-500 hover:scale-110 transition-all" />
            <VscEdit size={20} className="cursor-pointer hover:text-blue-500 hover:scale-110 transition-all" />
          </div>
        </div>
        <div className="w-[40vw] px-2 mx-2">
          <p className="font-eb text-lg text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            repellendus, laboriosam pariatur debitis dicta minima eos numquam
            soluta exercitationem ipsa quibusdam maiores, accusamus veritatis?
          </p>
        </div>
      </div>
  )
}

export default JournalCard