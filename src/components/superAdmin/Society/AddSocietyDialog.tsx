import { useState } from "react"
import { Plus, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface AddSocietyDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AddSocietyDialog({
  open,
  onOpenChange,
}: AddSocietyDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Save Society")

    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto rounded-2xl p-0">
        <DialogHeader className="border-b p-6">
          <DialogTitle className="text-3xl font-bold text-slate-900">
            Register New Society
          </DialogTitle>

          <DialogDescription className="pt-2 text-slate-500">
            Establish a new community entity in the SocietyPro network. Fill in
            the primary operational details below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Society Name */}

            <div className="md:col-span-2">
              <Label className="mb-2 block">
                Society Name
                <span className="ml-1 text-red-500">*</span>
              </Label>

              <Input
                placeholder="e.g. Royal Green Heights Phase I"
                className="h-12 border-slate-300 focus-visible:ring-indigo-500"
              />
            </div>

            {/* Address */}

            <div className="md:col-span-2">
              <Label className="mb-2 block">
                Address
                <span className="ml-1 text-red-500">*</span>
              </Label>

              <Textarea
                rows={4}
                placeholder="Street address, building number, landmark..."
                className="resize-none border-slate-300 focus-visible:ring-indigo-500"
              />
            </div>

            {/* City */}

            <div>
              <Label className="mb-2 block">
                City
                <span className="ml-1 text-red-500">*</span>
              </Label>

              <Input
                placeholder="Enter City"
                className="h-12 border-slate-300 focus-visible:ring-indigo-500"
              />
            </div>

            {/* State */}

            <div>
              <Label className="mb-2 block">
                State
                <span className="ml-1 text-red-500">*</span>
              </Label>

              <Select>
                <SelectTrigger className="h-12 border-slate-300">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="mh">Maharashtra</SelectItem>

                  <SelectItem value="gj">Gujarat</SelectItem>

                  <SelectItem value="ka">Karnataka</SelectItem>

                  <SelectItem value="dl">Delhi</SelectItem>

                  <SelectItem value="tn">Tamil Nadu</SelectItem>

                  <SelectItem value="ts">Telangana</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Pincode */}

            <div>
              <Label className="mb-2 block">
                Pincode
                <span className="ml-1 text-red-500">*</span>
              </Label>

              <Input
                placeholder="6-digit Pincode"
                className="h-12 border-slate-300 focus-visible:ring-indigo-500"
              />
            </div>
          </div>

          {/* Footer */}

          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="h-12 cursor-pointer rounded-xl"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="h-12 cursor-pointer gap-2 rounded-xl bg-indigo-600 px-6 shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 hover:shadow-indigo-500/30"
            >
              <Save className="h-5 w-5" />
              Save Society
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
