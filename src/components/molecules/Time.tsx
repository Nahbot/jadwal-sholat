import { format } from "date-fns";
import id from "date-fns/locale/id";
import { useDate } from "~hooks/useDate";

const Time = () => {
  const formattedDate: string = format(useDate(), `dd MMMM yyyy, kk.mm.ss`, { locale: id });

  return (
    <div className="flex space-x-1">
      <p className="text-xl font-bold">{formattedDate}</p>
    </div>
  );
};

export default Time;