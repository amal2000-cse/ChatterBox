import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    // const {id: receiverId} = req.params; does is it destructures
    //  the id property from the req.params object and assigns it to
    //  a variable called receiverId. So, if the route parameter is named
    //  id, the value of that parameter will be assigned to receiverId.
    const { id: receiverId } = req.params;
    //this - req.user._id we are getting from the protectRoute.js
    const senderId = req.user._id;

    //FIRST we will find the conversation between the senderId AND THE receiverId
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    //now creating the new message for the conversation array with the ser of meesage model
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await conversation.save();
    // await newMessage.save();
    //we can also save in this form

    //in this case, both will run parallelly
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in message controller: " + error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      //in the participants array we only have the id's of all the
      //messages between the participants - so now to also get the message content
      //we will use the method - populate

      // When you query for a conversation using findOne(), you specify a condition to find the conversation between two participants (senderId and userToChatId).
      // By default, Mongoose returns only the IDs of the referenced documents in the messages field.
      // However, by chaining the .populate("messages") method, you're telling Mongoose to replace these IDs with the actual message documents referenced by those IDs.
      // After calling .populate("messages"), the conversation object will have the messages field populated with the actual message documents instead of just their IDs.

      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if(!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json(messages);

  } catch (error) {
    console.log("Error in message controller: " + error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
