import { useEffect, useState } from "react"
import {
  getAddressFromKlayr32Address,
  getFirstEightBytesReversed,
  getKlayr32AddressFromAddress,
  getKlayr32AddressFromPublicKey,
  validateKlayr32Address,
  hash,
} from "../lisk-client";


export const useAddressConverter = () => {
  const [input, setInput] = useState<string>("")
  const [klayr32, setKlayr32] = useState<string>("")
  const [publicKey, setPublicKey] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [legacy, setLegacy] = useState<string>("")
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    const isKlayr32 = () => {
      try {
        return validateKlayr32Address(input, "kly")
      } catch (e) {
        return false
      }
    }
    const isAddress = () => {
      try {
        return validateKlayr32Address(
          getKlayr32AddressFromAddress(Buffer.from(input, "hex")),
          "kly",
        )
      } catch (e) {
        return false
      }
    }
    const isPublicKey = () => {
      try {
        return (
          input.length === 64 &&
          validateKlayr32Address(
            getKlayr32AddressFromPublicKey(Buffer.from(input, "hex")),
            "kly",
          )
        )
      } catch (e) {
        return false
      }
    }
    const isLegacy = () => {
      try {
        return (
          input.substr(input.length - 1, 1) === "L" &&
          BigInt(input.substr(0, input.length - 1)).toString() ===
            input.substr(0, input.length - 1)
        )
      } catch (e) {
        return false
      }
    }

    const getType = () => {
      if (isKlayr32()) return "klayr32"
      if (isAddress()) return "address"
      if (isLegacy()) return "legacy"
      if (isPublicKey()) return "publicKey"
      return "unknown"
    }
    const setAddressFromInput = (inputType: string) => {
      switch (inputType) {
        case "klayr32":
          setAddress(
            new Buffer(getAddressFromKlayr32Address(input, "kly")).toString(
              "hex",
            ),
          )
          break
        case "address":
          setAddress(input)
          break
        case "publicKey":
          const base32 = getKlayr32AddressFromPublicKey(
            Buffer.from(input, "hex"), 'kly'
          )
          setAddress(
            new Buffer(getAddressFromKlayr32Address(base32, "kly")).toString(
              "hex",
            ),
          )
          break
        case "legacy":
          setAddress("")
          break
        default:
          setAddress("")
      }
    }
    const setPublicKeyFromInput = (inputType: string) => {
      switch (inputType) {
        case "klayr32":
          setPublicKey("")
          break
        case "address":
          setPublicKey("")
          break
        case "publicKey":
          setPublicKey(input)
          break
        case "legacy":
          setPublicKey("")
          break
        default:
          setPublicKey("")
      }
    }
    const setKlayr32FromInput = (inputType: string) => {
      switch (inputType) {
        case "klayr32":
          setKlayr32(input)
          break
        case "address":
          setAddress(getKlayr32AddressFromAddress(Buffer.from(input, "hex"), 'kly'))
          break
        case "publicKey":
          setKlayr32(getKlayr32AddressFromPublicKey(Buffer.from(input, "hex"), 'kly'))
          break
        case "legacy":
          setKlayr32("")
          break
        default:
          setKlayr32("")
      }
    }

    const setLegacyFromInput = (inputType: string) => {
      const bufToBn = (buf: any) => {
        const hex: any = []
        const u8 = Uint8Array.from(buf)

        u8.forEach((i: any) => {
          var h = i.toString(16)
          if (h.length % 2) h = "0" + h
          hex.push(h)
        })

        return BigInt("0x" + hex.join(""))
      }
      switch (inputType) {
        case "klayr32":
          setLegacy(
            `${bufToBn(
              getFirstEightBytesReversed(
                getAddressFromKlayr32Address(input, "kly"),
              ),
            ).toString()}L`,
          )
          break
        case "address":
          const firstEightBytes = getFirstEightBytesReversed(
            Buffer.from(input, "hex"),
          )
          setLegacy(`${bufToBn(firstEightBytes).toString()}L`)
          break
        case "publicKey":
          const publicKeyHash = hash(Buffer.from(input, "hex"))
          setLegacy(
            `${bufToBn(getFirstEightBytesReversed(publicKeyHash)).toString()}L`,
          )
          break
        case "legacy":
          setLegacy(input)
          break
        default:
          setLegacy("")
      }
    }
    if (input) {
      const inputType = getType()
      if (inputType === "unknown") {
        setError("Input can't be analyzed")
      } else {
        setError(undefined)
      }
      setAddressFromInput(inputType)
      setKlayr32FromInput(inputType)
      setPublicKeyFromInput(inputType)
      setLegacyFromInput(inputType)
    }
  }, [input])

  return {
    setInput,
    klayr32: klayr32,
    publicKey,
    address,
    legacy,
    error,
  }
}
