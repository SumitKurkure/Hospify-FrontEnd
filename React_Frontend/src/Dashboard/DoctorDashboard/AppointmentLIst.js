import React from 'react'

const AppointmentLIst = () => {
  return (
    <div> { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> : }</div>
  )
}

export default AppointmentLIst