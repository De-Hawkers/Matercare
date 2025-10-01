import cron from "node-cron"
import reminder from "../models/reminder.model";
import User from "../models/user.model";
import { generateSchedule } from "../utils/schedule";


const reminderFunc = async (req, res) => {
    const validUser = req.user
    try {
        const {pregnancyStartDate} = req.body;

        const userSchema = await User.findById(req.user.id);
        if (!userSchema){
            return res.status(404).json({
                success:false,
                message: "User Not found"
            })
        }
        
        const user = new reminder({
            user: userSchema,
            pregnancyStartDate : new Date(pregnancyStartDate),
            validUser,
        })
        
        await user.save()

        res.status(201).json({
            success:true,
            message: "Pregnancy registered successfully",
            user
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Internal Server Error"
        })
    }
}

cron.schedule('0 8 * * *', async () => {
    const today = new Date();

    const users = await reminder.find({ pregnancyStartDate: { $ne: null } })

    for (let user of users) {
        const schedule = generateSchedule(user.pregnancyStartDate);

        for (let visit of schedule) {
            const diffDays = Math.floor((visit.date - today) / (1000 * 60 * 60 * 24));

            if (diffDays === 2) {
                await sendReminder(user, visit);
            }
        }
    }
})

const sendReminder = async (user, visit) => {
    const message = `MaterCare wishes to remind ${user.fullName}, this is a reminder to visit the hospital for your antenatal care (week ${visit.week}) on ${visit.formatted}. MaterCare❤`;

    try {
        
    } catch (error) {
        
    }
}




export {reminderFunc}