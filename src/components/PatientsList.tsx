import { usePatientStore } from "../stores/store"
import { PatientDetail } from "./PatientDetail";

export const PatientsList = () => {

  const patients = usePatientStore(state => state.patients)
  console.log(patients);

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Adminstra tus {''}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
          {patients.map(patient => (
            <PatientDetail
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ):(
        <>
          <h2 className="font-black text-3xl text-center"></h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">Y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}
