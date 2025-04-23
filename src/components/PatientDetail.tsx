
import type { Patient } from "../types"

type PatientDetailProps = {
    patient: Patient
}

export const PatientDetail = ({patient}: PatientDetailProps) => {
  return (
    <div>{patient.name}</div>
  )
}
