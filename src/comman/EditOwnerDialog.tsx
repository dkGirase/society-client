import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ChevronLeft, ChevronRight, Save, User, Building2 } from "lucide-react"

interface EditOwnerDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function EditOwnerDialog({
  open,
  onOpenChange,
}: EditOwnerDialogProps) {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    firstName: "Rajesh",
    lastName: "Mukherji",
    email: "r.mukherji@example.com",
    phone: "+91 98765 43210",
    secondaryContact: "",
    block: "B Block",
    flat: "402",
    ownership: "Owner Resident",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    console.log(formData)
    onOpenChange(false)
    setStep(1)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v)
        if (!v) setStep(1)
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl p-6">
        {/* Header */}
        <DialogHeader className="mb-6 text-left">
          <DialogTitle className="text-2xl font-bold">Edit Owner</DialogTitle>
        </DialogHeader>

        {/* Stepper (same style as Add Owner) */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                step >= 1 ? "bg-indigo-600 text-white" : "bg-slate-200"
              }`}
            >
              1
            </div>
            <span>Personal</span>
          </div>

          <div className="h-1 w-16 bg-slate-200" />

          <div className="flex items-center gap-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                step >= 2 ? "bg-indigo-600 text-white" : "bg-slate-200"
              }`}
            >
              2
            </div>
            <span>Property</span>
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="text-xs text-slate-500 uppercase">
                First Name
              </label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border-slate-300"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500 uppercase">
                Last Name
              </label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border-slate-300"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 uppercase">Email</label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-slate-300"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500 uppercase">Phone</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-slate-300"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500 uppercase">
                Secondary Contact
              </label>
              <Input
                name="secondaryContact"
                value={formData.secondaryContact}
                onChange={handleChange}
                className="border-slate-300"
              />
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label className="text-xs text-slate-500 uppercase">Block</label>
              <Select
                value={formData.block}
                onValueChange={(value) =>
                  setFormData({ ...formData, block: value })
                }
              >
                <SelectTrigger className="border-slate-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A Block">A Block</SelectItem>
                  <SelectItem value="B Block">B Block</SelectItem>
                  <SelectItem value="C Block">C Block</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs text-slate-500 uppercase">Flat</label>
              <Input
                name="flat"
                value={formData.flat}
                onChange={handleChange}
                className="border-slate-300"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500 uppercase">
                Ownership
              </label>
              <Select
                value={formData.ownership}
                onValueChange={(value) =>
                  setFormData({ ...formData, ownership: value })
                }
              >
                <SelectTrigger className="border-slate-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Owner Resident">Owner Resident</SelectItem>
                  <SelectItem value="Non-Resident Owner (NRO)">NRO</SelectItem>
                  <SelectItem value="Tenant">Tenant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 flex justify-between border-t pt-4">
          <Button
            className="cursor-pointer"
            variant="outline"
            onClick={() => {
              if (step === 1) {
                onOpenChange(false)
              } else {
                setStep(1)
              }
            }}
          >
            {step === 1 ? "Cancel" : "Previous"}
          </Button>

          {step === 1 ? (
            <Button
              onClick={() => setStep(2)}
              className="cursor-pointer bg-indigo-600 hover:bg-indigo-500"
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSave}
              className="cursor-pointer bg-indigo-600 hover:bg-indigo-500"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
