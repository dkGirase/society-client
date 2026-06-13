import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Eye, EyeOff, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ResetPassword = () => {
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const [password, setPassword] = useState("")

  const getStrength = () => {
    if (password.length < 8)
      return {
        width: "0%",
        text: "Password must be at least 8 characters",
        color: "bg-red-500",
      }

    let score = 0

    if (password.length >= 8) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    if (score === 1)
      return {
        width: "25%",
        text: "Weak",
        color: "bg-red-500",
      }

    if (score === 2)
      return {
        width: "50%",
        text: "Fair",
        color: "bg-yellow-500",
      }

    if (score === 3)
      return {
        width: "75%",
        text: "Good",
        color: "bg-blue-500",
      }

    return {
      width: "100%",
      text: "Strong",
      color: "bg-green-500",
    }
  }

  const strength = getStrength()

  return (
    <main className="relative flex flex-grow items-center justify-center overflow-hidden px-6 py-20">
      {/* Background */}

      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-[10%] left-[5%] h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute right-[5%] bottom-[10%] h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <Card className="w-full max-w-lg animate-in rounded-xl border border-border/30 bg-white p-8 shadow-sm duration-700 fade-in slide-in-from-bottom-4 md:p-10">
        {/* Header */}

        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-semibold text-[var(--on-background)]">
            Reset Password
          </h1>

          <p className="text-[var(--on-surface-variant)]">
            Verify your identity and create a secure new password for your
            resident account.
          </p>
        </div>

        <form className="space-y-7">
          {/* OTP */}

          <div>
            <Label className="mb-4 block text-[var(--on-surface-variant)] uppercase">
              Enter 6-Digit OTP
            </Label>

            <div className="flex justify-between gap-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <Input
                  key={index}
                  maxLength={1}
                  className="aspect-square h-14 rounded-lg border border-border bg-white text-center text-2xl focus-visible:border-primary focus-visible:ring-0"
                />
              ))}
            </div>

            <div className="mt-2 flex justify-end">
              <button
                type="button"
                className="cursor-pointer text-sm text-primary hover:underline"
              >
                Resend OTP
              </button>
            </div>
          </div>

          {/* Password */}

          <div className="space-y-5">
            {/* New */}

            <div>
              <Label className="mb-2 block text-[var(--on-surface-variant)]">
                New Password
              </Label>

              <div className="relative">
                <Input
                  type={showNew ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 rounded-lg border-border pr-12 focus-visible:border-primary focus-visible:ring-0"
                />

                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-primary"
                >
                  {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="mt-3">
                <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                  <div
                    style={{ width: strength.width }}
                    className={`h-full transition-all duration-300 ${strength.color}`}
                  />
                </div>

                <span className="mt-2 block text-sm text-[var(--on-surface-variant)]">
                  {strength.text}
                </span>
              </div>
            </div>

            {/* Confirm */}

            <div>
              <Label className="mb-2 block text-[var(--on-surface-variant)]">
                Confirm New Password
              </Label>

              <div className="relative">
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-11 rounded-lg border-border pr-12 focus-visible:border-primary focus-visible:ring-0"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-primary"
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Submit */}

          <Button className="h-12 w-full cursor-pointer gap-2 rounded-lg bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md">
            Reset Password
            <RotateCcw size={18} />
          </Button>
        </form>

        {/* Footer */}

        <div className="mt-10 text-center">
          <Link
            to="/login"
            className="inline-flex cursor-pointer items-center gap-2 text-[var(--on-surface-variant)] hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back to Login
          </Link>
        </div>
      </Card>
    </main>
  )
}

export default ResetPassword
