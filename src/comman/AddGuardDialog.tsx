import { useState } from "react"
import { UserPlus } from "lucide-react"

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

interface AddGuardDialogProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  assignment: string
  shift: string
  dutyHours: string
}

export default function AddGuardDialog({
  open,
  setOpen,
}: AddGuardDialogProps) {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    assignment: "",
    shift: "",
    dutyHours: "",
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
      password: "",
      confirmPassword: "",
      assignment: "",
      shift: "",
      dutyHours: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto rounded-2xl border-0 p-0">
        <div className="rounded-2xl bg-white p-8">
          <DialogHeader className="mb-8 space-y-2 text-left">
            <DialogTitle className="text-3xl font-black text-slate-900">
              Add New Guard
            </DialogTitle>

            <p className="text-sm text-slate-500">
              Create a new guard profile and assign duty details.
            </p>
          </DialogHeader>

          {/* Progress */}
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

              <span className="font-medium text-slate-700">Assignment</span>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-8"
          >
            {/* Step 1 */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
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

                <div>
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

                <div>
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

                <div>
                  <Label className="mb-2 block text-sm font-medium text-slate-600">
                    Phone <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                  />
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium text-slate-600">
                    Password <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                  />
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium text-slate-600">
                    Confirm Password <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                  />
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Label className="mb-2 block text-sm font-medium text-slate-600">
                    Guard Assignment <span className="text-red-500">*</span>
                  </Label>

                  <Select
                    value={formData.assignment}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        assignment: value,
                      })
                    }
                  >
                    <SelectTrigger className="h-12 border-slate-300 focus-visible:border-indigo-500 focus-visible:ring-indigo-500">
                      <SelectValue placeholder="Select assignment" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="main-gate">Main Gate</SelectItem>
                      <SelectItem value="visitor-entry">
                        Visitor Entry
                      </SelectItem>
                      <SelectItem value="parking">Parking Area</SelectItem>
                      <SelectItem value="club-house">Club House</SelectItem>
                      <SelectItem value="tower-security">
                        Tower Security
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium text-slate-600">
                    Shift <span className="text-red-500">*</span>
                  </Label>

                  <Select
                    value={formData.shift}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        shift: value,
                      })
                    }
                  >
                    <SelectTrigger className="h-12 border-slate-300 focus-visible:border-indigo-500 focus-visible:ring-indigo-500">
                      <SelectValue placeholder="Select shift" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="morning">
                        Morning Shift
                      </SelectItem>
                      <SelectItem value="evening">
                        Evening Shift
                      </SelectItem>
                      <SelectItem value="night">
                        Night Shift
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <Label className="mb-2 block text-sm font-medium text-slate-600">
                    Duty Hours <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    name="dutyHours"
                    value={formData.dutyHours}
                    onChange={handleChange}
                    placeholder="06:00 AM - 02:00 PM"
                    className="h-12 border-slate-300 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                  />
                </div>
              </div>
            )}

            {/* Actions */}
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
                  type="button"
                  onClick={handleSubmit}
                  className="cursor-pointer bg-indigo-600 hover:bg-indigo-500"
                >
                  <UserPlus className="h-5 w-5" />
                  Create Guard
                </Button>
              )}
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
