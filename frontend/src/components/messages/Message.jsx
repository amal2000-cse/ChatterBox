import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-lg'>
                <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigaKbxrqZF0j7NeJHjWGvbpII2kPR5J7QNtpf_bP4aw&s"} alt="" />

            </div>

        </div>
        <div className={'chat-bubble text-white bg-blue-500'}>Hi! How is it going!</div>
        <div className='chat-footer text-white text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message