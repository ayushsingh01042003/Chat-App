import { useEffect } from "react"
import { Input } from "@/components/ui/input"

const Conversations = () => {

  // useEffect(() => {
  //   const fetchConversation = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/api/users/", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           header_token: localStorage.getItem('token'),
  //         }),
  //       })
  //       const data = await res.json()
  //       console.log(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   fetchConversation()
  // }, [])

  return (
    <>
      <div className="flex justify-around mt-10">
        {/* left side of the screen */}
        <div className=" px-40">
          Sender 
        </div>
        {/* RIght side of the screen */}
        <div className="px-40">
          Reciever
        </div>
      </div>

    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-1/2">
      <Input className="w-full border-red-800"/>
    </div>
    </>
  )
}

export default Conversations