import { db } from "~/services/db.server"

export const getTools=async()=>{
  try{
   let tools=await db.tools.findMany({
    orderBy:[{active:'desc'},{id:'asc'}],
   });

   return tools;
  }catch(e){
    console.log(e)
  }
}
export const changeActiveStatus=async(id:string,status:boolean)=>{
    let id_=parseInt(id);
    try{
        let tool=await db.tools.update({
        where:{id:id_},
        data:{active:status}
        })
        return tool;
    }catch(e){
        console.log(e)
    }
}