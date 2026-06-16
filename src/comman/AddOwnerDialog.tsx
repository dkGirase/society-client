import { useState } from "react"
import { UserPlus, User, Building2, ClipboardCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

interface AddOwnerDialogProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  block: string
  floor: string
  flat: string
  ownership: "primary" | "co-owner"
  parking: string
  emergencyContact: string
}

export default function AddOwnerDialog({ open, setOpen }: AddOwnerDialogProps) {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    block: "",
    floor: "",
    flat: "",
    ownership: "primary",
    parking: "",
    emergencyContact: "",
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log(formData)

    setOpen(false)
    setStep(1)

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      block: "",
      floor: "",
      flat: "",
      ownership: "primary",
      parking: "",
      emergencyContact: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto rounded-2xl border-0 p-0">
        <div className="rounded-2xl bg-white p-8">
          {/* Header */}

          <DialogHeader className="mb-8 space-y-2 text-left">
            <DialogTitle className="text-3xl font-black text-slate-900">
              Add New Owner
            </DialogTitle>

            <p className="text-sm text-slate-500">
              Create a new owner profile and assign property details.
            </p>
          </DialogHeader>

          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                  step >= 1
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                1
              </div>

              <span className="font-medium text-slate-700">Personal</span>
            </div>

            <div className="h-[2px] w-16 bg-slate-200" />

            <div className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                  step >= 2
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                2
              </div>

              <span className="font-medium text-slate-700">Ownership</span>
            </div>
          </div>

          {/* Form */}

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            {/* Personal Information */}
            {step === 1 && (
              <>
                {/* Personal Info */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="md:col-span-1">
                    <Label className="mb-2 block text-sm font-medium text-slate-600">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <Label className="mb-2 block text-sm font-medium text-slate-600">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <Label className="mb-2 block text-sm font-medium text-slate-600">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <Label className="mb-2 block text-sm font-medium text-slate-600">
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Property Info */}
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="md:col-span-1">
                    <Label className="mb-2 block text-sm font-medium text-slate-600">
                      Block <span className="text-red-500">*</span>
                    </Label>

                    <Select
                      value={formData.block}
                      onValueChange={(value) =>
                        setFormData({ ...formData, block: value })
                      }
                    >
                      <SelectTrigger className="h-12 border-slate-300 focus-visible:border-indigo-500 focus-visible:ring-indigo-500">
                        <SelectValue placeholder="Select block" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="A">Block A</SelectItem>
                        <SelectItem value="B">Block B</SelectItem>
                        <SelectItem value="C">Block C</SelectItem>
                        <SelectItem value="D">Block D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-1">
                    <Label className="mb-2 block text-sm font-medium text-slate-600">
                      Floor <span className="text-red-500">*</span>
                    </Label>

                    <Input
                      name="floor"
                      type="number"
                      value={formData.floor}
                      onChange={handleChange}
                      placeholder="12"
                      className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label className="mb-2 block text-sm font-medium text-slate-600">
                      Flat Number <span className="text-red-500">*</span>
                    </Label>

                    <Input
                      name="flat"
                      value={formData.flat}
                      onChange={handleChange}
                      placeholder="1204"
                      className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                  </div>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                {/* Ownership + Parking */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Ownership Type */}
                  <div className="md:col-span-1">
                    <Label className="mb-2 block text-sm font-medium text-slate-600">
                      Ownership Type <span className="text-red-500">*</span>
                    </Label>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, ownership: "primary" })
                        }
                        className={`h-12 rounded-lg border text-sm font-medium transition-all ${
                          formData.ownership === "primary"
                            ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                            : "border-slate-300 text-slate-600 hover:border-slate-400"
                        }`}
                      >
                        Primary
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, ownership: "co-owner" })
                        }
                        className={`h-12 rounded-lg border text-sm font-medium transition-all ${
                          formData.ownership === "co-owner"
                            ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                            : "border-slate-300 text-slate-600 hover:border-slate-400"
                        }`}
                      >
                        Co-owner
                      </button>
                    </div>
                  </div>

                  {/* Parking */}
                  <div className="md:col-span-1">
                    <Label className="mb-2 block text-sm font-medium text-slate-600">
                      Parking Slot
                    </Label>

                    <Input
                      name="parking"
                      value={formData.parking}
                      onChange={handleChange}
                      placeholder="e.g. P-45"
                      className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                  </div>

                  {/* Emergency Contact */}
                  <div className="md:col-span-2">
                    <Label className="mb-2 block text-sm font-medium text-slate-600">
                      Emergency Contact
                    </Label>

                    <Textarea
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setFormData({
                          ...formData,
                          emergencyContact: e.target.value,
                        })
                      }
                      placeholder="Name - Phone Number"
                      className="min-h-[120px] border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                  </div>
                </div>
              </>
            )}
            {/* Form Actions */}
            <div className="flex items-center justify-between border-t border-slate-200 pt-6">
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  if (step === 1) {
                    setOpen(false)
                  } else {
                    setStep(1)
                  }
                }}
                className="cursor-pointer"
              >
                {step === 1 ? "Cancel" : "Previous"}
              </Button>

              {step === 1 ? (
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="cursor-pointer bg-indigo-600 hover:bg-indigo-500"
                >
                  Next
                </Button>
              ) : (
                <Button
                  className="cursor-pointer bg-indigo-600 hover:bg-indigo-500"
                  type="button"
                  onClick={handleSubmit}
                >
                  <UserPlus className="h-5 w-5" />
                  Create Owner
                </Button>
              )}
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
