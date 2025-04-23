
import type { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"

type PatientDetailProps = {
    patient: Patient
}

export const PatientDetail = ({patient}: PatientDetailProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID"data={patient.id}/>
        <PatientDetailItem label="Nombre"data={patient.name}/>
        <PatientDetailItem label="Propietario"data={patient.caretaker}/>
        <PatientDetailItem label="Correo"data={patient.email}/>
        <PatientDetailItem label="Fecha alta"data={patient.date.toString()}/>
        <PatientDetailItem label="Síntomas"data={patient.symptoms}/>
    </div>
  )
}
