import styles from "./ProfileModal.module.css"

function ProfileModal({openProfile, setOpenProfile}) {
if(!openProfile) return
  return (
    <div className={styles.container}>
      ProfileModal
    </div>
  )
}

export default ProfileModal
