import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { v4 as uuidv4 } from 'uuid'
import type { DraftPatient, Patient } from "../types"

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    AddPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPationById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>()(
    devtools(
        persist((set) => ({

            //State
            patients: [],
            activeId: '',

            //methods
            AddPatient: (data) => {
                const newPatient = createPatient(data)
                set((state) => ({
                    patients: [...state.patients, newPatient]
                }))
            },

            deletePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter(patient => patient.id !== id)
                }))
            },

            getPationById: (id) => {
                set(() => ({
                    activeId: id
                }))
            },

            updatePatient: (data) => {
                set((state) => ({
                    patients: state.patients.map(patient => patient.id === state.activeId
                        ? { id: patient.id, ...data }
                        : patient),
                    activeId: ''
                }))
            }
        }), {
            name: 'patient-storage',
        })
    ))