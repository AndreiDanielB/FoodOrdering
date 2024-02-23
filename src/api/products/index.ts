import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export const useProductList = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async () => {
          const {data, error} = await supabase.from('products').select('*');
          if(error){
            throw new Error(error.message);
          }
          return data;
        },
      });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      const {data, error} = await supabase.from('products').select('*');
      if(error){
        throw new Error(error.message);
      }
      return data;
    },
  });
};