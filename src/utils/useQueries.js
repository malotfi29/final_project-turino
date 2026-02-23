import { useQuery } from "@tanstack/react-query";
import { getAllToures } from "@/services/touresSevices";

export  function useToures() {
  const { data, isPending } = useQuery({
    queryKey: ["toures"],
    queryFn: ()=>getAllToures(),
  
  });

  

  return { data, isPending };
}
