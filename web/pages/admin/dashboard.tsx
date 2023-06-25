import AdminDashboard from "@/components/admin/AdminDashboard";
import { NextPage } from "next"
import { useAppSelector } from "@/store/hooks";


const Dashboard: NextPage = () => {
    const username = useAppSelector((state) => state.auth.username);
    console.log(username);
    return (
        <div>
            <AdminDashboard name={username || "Admin"} imageSrc={`/favicon.ico`} />
        </div>
    )
}

export default Dashboard;