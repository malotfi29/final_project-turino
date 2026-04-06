import AccountInformation from "@/modules/AccountInformation";
import BankInformation from "@/modules/BankInformation";
import PersonalInformation from "@/modules/PersonalInformation";

function ProfilePage() {

  
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"3rem"}}>
     <AccountInformation/>
     <PersonalInformation/>
     <BankInformation/>
    </div>
  );
}

export default ProfilePage;
