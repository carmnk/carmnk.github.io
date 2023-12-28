import React from 'react'
import { CTextField } from './CTextField'
import axios from 'axios'
import uniqBy from 'lodash/uniqBy'
import { CAutoComplete2 } from './CAutoComplete'
const apiKey = 'TAMQuaSeUwuMkX8vL0nEoudkX0p4OYdcISSk1eCDt2c'

const queryTags = async (val: string[] | string, matchLevel: string) => {
  const query = Array.isArray(val) ? val.join(',') : val
  const qResult = await axios.get(
    `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${apiKey}&query=${query}`
  )
  const suggestions = qResult?.data?.suggestions?.filter?.((val: any) => val?.matchLevel === matchLevel)
  return suggestions
}

export type AdressInputProps = {
  showError?: boolean
  required?: boolean
  handleChange?: (e: any) => void
  country: { label?: string | null; value?: string | null; id: string }
  postCode: { label?: string | null; value?: string | null; id: string }
  city: { label?: string | null; value?: string | null; id: string }
  street: { label?: string | null; value?: string | null; id: string }
  streetNumber: { label?: string | null; value?: string | null; id: string }
  adressAdditional: { label?: string | null; value?: string | null; id: string }
  formData?: any
}

export const AddressInput = (props: AdressInputProps) => {
  const {
    showError,
    required,
    handleChange,
    country,
    postCode,
    city,
    street,
    streetNumber,
    adressAdditional,
    formData,
  } = props

  // only labels are optional
  const { label: countryLabel, id: countryId } = country
  const { label: postCodeLabel, id: postCodeId } = postCode
  const { label: cityLabel, id: cityId } = city
  const { label: streetLabel, id: streetId } = street
  const { label: streetNumberLabel, id: streetNumberId } = streetNumber
  const { label: additionalLabel, id: additionalId } = adressAdditional

  const countryValue = country?.value ?? formData?.[countryId]
  const postCodeValue = postCode?.value ?? formData?.[postCodeId]
  const cityValue = city?.value ?? formData?.[cityId]
  const streetValue = street?.value ?? formData?.[streetId]
  const streetNumberValue = streetNumber?.value ?? formData?.[streetNumberId]
  const additionalValue = adressAdditional?.value ?? formData?.[additionalId]

  const [addressSuggestions, setAddressSuggestions] = React.useState({
    country: [] as any[],
    postCode: [] as any[],
    place: [] as any[],
    street: [] as any[],
    streetNumber: [] as any[],
  })

  React.useEffect(() => {}, [])
  const handleCountrySuggestion = (val: string) => {
    if (!val) return
    queryTags(val, 'country')
      .then((res) => {
        const uniqCountrys = uniqBy(res, 'countryCode')
        setAddressSuggestions((current) => ({
          ...current,
          country: uniqCountrys?.map((c: any) => ({
            label: c.label,
            value: c.label,
            countryCode: c.countryCode,
          })),
        }))
      })
      .catch((e) => console.error(e))
  }

  const handlePostalCodeSuggestion = (val: string) => {
    if (!val) return
    const queryParams = []
    if (countryValue) queryParams.push(countryValue)
    const queryParamsAdj = val ? [...queryParams, val] : queryParams
    const query = queryParams?.length ? queryParamsAdj.join(',') : val
    queryTags(query, 'postalCode')
      .then((res) => {
        const uniqPostCodes = uniqBy(res, (item: any) => item.address.postalCode)
        setAddressSuggestions((current) => ({
          ...current,
          postCode: uniqPostCodes?.map((c: any) => ({
            label: c?.address?.postalCode,
            value: c?.address?.postalCode,
          })),
        }))
      })
      .catch((e) => console.error(e))
  }

  const handlePlaceSuggestion = (val: string) => {
    const queryParams = []
    if (countryValue) queryParams.push(countryValue)
    if (postCodeValue) queryParams.push(postCodeValue)
    const queryParamsAdj = val ? [...queryParams, val] : queryParams
    const query = queryParams?.length ? queryParamsAdj.join(',') : val
    queryTags(query, 'city')
      .then((res) => {
        const uniqCities = uniqBy(res, (item: any) => item.address.city)
        setAddressSuggestions((current) => ({
          ...current,
          place: uniqCities?.map((c: any) => ({
            label: c?.address?.city,
            value: c?.address?.city,
          })),
        }))
      })
      .catch((e) => console.error(e))
  }
  const handleStreetSuggestion = (val: string) => {
    const queryParams = []
    if (countryValue) queryParams.push(countryValue)
    if (postCodeValue) queryParams.push(postCodeValue)
    if (cityValue) queryParams.push(cityValue)

    const queryParamsAdj = val ? [...queryParams, val] : queryParams
    const query = queryParams?.length ? queryParamsAdj.join(',') : val
    queryTags(query, 'street')
      .then((res) => {
        const uniqStreets = uniqBy(res, (item: any) => item.address.street)
        setAddressSuggestions((current) => ({
          ...current,
          street: uniqStreets?.map((c: any) => ({
            label: c?.address?.street,
            value: c?.address?.street,
          })),
        }))
      })
      .catch((e) => console.error(e))
  }

  const handleStreetNumberSuggestion = (val: string) => {
    const queryParams = []
    if (countryValue) queryParams.push(countryValue)
    if (postCodeValue) queryParams.push(postCodeValue)
    if (cityValue) queryParams.push(cityValue)
    if (streetValue) queryParams.push(streetValue)

    const queryParamsAdj = val ? [...queryParams, val] : queryParams
    const query = queryParams?.length ? queryParamsAdj.join(',') : val
    queryTags(query, 'houseNumber')
      .then((res) => {
        const uniqStreetNumbers = uniqBy(res, (item: any) => item.address.houseNumber)
        setAddressSuggestions((current) => ({
          ...current,
          streetNumber: uniqStreetNumbers?.map((c: any) => ({
            label: c?.address?.houseNumber,
            value: c?.address?.houseNumber,
          })),
        }))
      })
      .catch((e) => console.error(e))
  }

  return (
    <>
      <div className="flex items-center mt-12 mb-8 gap-8">
        <div className="relative w-48">
          <CAutoComplete2
            label={countryLabel ?? 'Melde-Land'}
            isError={required && !countryValue && showError}
            value={countryValue ?? ''}
            placeholder="Bitte auswählen"
            name={countryId}
            onChange={(sel) => {
              handleChange?.({
                target: { name: countryId, value: sel ?? '' },
              })
            }}
            required={required}
            options={
              !addressSuggestions?.country?.find?.((val) => val.value === 'Deutschland')
                ? [{ value: 'Deutschland', label: 'Deutschland' }, ...(addressSuggestions?.country ?? [])]
                : addressSuggestions?.country ?? []
            }
            onInputChange={handleCountrySuggestion as any}
            freeSolo={true}
          />
        </div>
        <div className="relative w-40">
          <CAutoComplete2
            label={postCodeLabel ?? 'Melde-PLZ'}
            isError={required && !postCodeValue && showError}
            value={postCodeValue ?? ''}
            placeholder="Bitte auswählen"
            name={postCodeId}
            onChange={(sel) => {
              handleChange?.({
                target: { name: postCodeId, value: sel },
              })
            }}
            required={required}
            options={addressSuggestions?.postCode ?? []}
            onInputChange={handlePostalCodeSuggestion}
          />
        </div>

        <div className="relative w-60">
          <CAutoComplete2
            label={cityLabel ?? 'Melde-Ort'}
            freeSolo
            isError={required && !cityValue && showError}
            value={cityValue ?? ''}
            placeholder="Bitte auswählen"
            name={cityId}
            onChange={(sel) => {
              handleChange?.({
                target: { name: cityId, value: sel },
              })
            }}
            required={required}
            options={addressSuggestions?.place ?? []}
            onInputChange={handlePlaceSuggestion}
          />
        </div>
      </div>
      <div className="flex mb-8 gap-8">
        <div className="relative w-96">
          <CAutoComplete2
            label={streetLabel ?? 'Meldestraße'}
            freeSolo
            isError={required && !streetValue && showError}
            value={streetValue ?? ''}
            placeholder="Bitte auswählen"
            name={streetId}
            onChange={(sel) => {
              handleChange?.({
                target: { name: streetId, value: sel },
              })
            }}
            required={required}
            options={addressSuggestions?.street ?? []}
            onInputChange={handleStreetSuggestion as any}
          />
        </div>
        <div className="relative w-40">
          <CAutoComplete2
            label={streetNumberLabel ?? 'Hausnummer'}
            freeSolo
            isError={required && !streetNumberValue && showError}
            value={streetNumberValue ?? ''}
            placeholder="Bitte auswählen"
            name={streetNumberId}
            onChange={(sel) => {
              handleChange?.({
                target: {
                  name: streetNumberId,
                  value: sel,
                },
              })
            }}
            required={required}
            options={addressSuggestions?.streetNumber ?? []}
            onInputChange={handleStreetNumberSuggestion as any}
          />
        </div>
      </div>
      <div className="" style={{ width: 580 }}>
        <CTextField
          type="text"
          value={additionalValue ?? ''}
          label={additionalLabel ?? 'Melde-Adresszusatz'}
          name={additionalId}
          onChange={handleChange}
          mainClass="w-96"
        />
      </div>
    </>
  )
}
