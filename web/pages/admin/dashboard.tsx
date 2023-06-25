import AdminDashboard from "@/components/admin/AdminDashboard";
import { NextPage } from "next"


const Dashboard: NextPage = () => {
    return (
        <div>
            <AdminDashboard name={"Tsehayneh"} imageSrc={`/favicon.ico`} />
        </div>
    )
}

export default Dashboard;