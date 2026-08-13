"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function LoanForm({
  slug,
  attribution,
  lang = "en",
}: {
  slug?: string;
  lang?: "en" | "es";
  attribution?: {
    partner?: string;
    brand?: string;
    location?: string;
    trafficSource?: string;
    mainSource?: string;
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
  };
}) {

  const translations = {
  en: {
    contactTitle: "Contact Information",
    contactDescription: "Drop your info below, it only takes a few minutes.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone number",
    selectState: "Select state",
    zipCode: "Zip Code",
    continue: "Continue →",

    vehicleTitle: "Vehicle Information",
    year: "Year",
    make: "Make",
    model: "Model",
    mileage: "Mileage",
    trim: "Trim (optional)",
    paidOff: "Vehicle Paid Off?",
    yes: "Yes",
    no: "No",

    terms: "I accept the Terms and Conditions",
    back: "← Back",
    submit: "Get My Cash",

    contactError: "Please complete all required contact fields.",
    vehicleError:
      "Please complete vehicle information and accept the terms.",
  },

  es: {
    contactTitle: "Información de Contacto",
    contactDescription:
      "Ingresa tu información a continuación. Solo te tomará unos minutos.",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo electrónico",
    phone: "Número de teléfono",
    selectState: "Selecciona tu estado",
    zipCode: "Código postal",
    continue: "Continuar →",

    vehicleTitle: "Información del Vehículo",
    year: "Año",
    make: "Marca",
    model: "Modelo",
    mileage: "Millaje",
    trim: "Versión (opcional)",
    paidOff: "¿Tu vehículo está pagado?",
    yes: "Sí",
    no: "No",

    terms: "Acepto los Términos y Condiciones",
    back: "← Volver",
    submit: "Mandar Solicitud",

    contactError:
      "Por favor completa todos los campos de contacto requeridos.",
    vehicleError:
      "Por favor completa la información del vehículo y acepta los términos.",
  },
};

const t = translations[lang];

  const searchParams = useSearchParams();

  const partner = searchParams.get("partner") ?? attribution?.partner ?? "";
  const brand = attribution?.brand ?? "Champion";
  const location = searchParams.get("location") ?? attribution?.location ?? "";
  const trafficSource = searchParams.get("traffic_source") ?? attribution?.trafficSource ?? "";
  const mainSource = attribution?.mainSource ?? "";
  const utmCampaign = searchParams.get("utm_campaign") ?? attribution?.utmCampaign ?? "";
  const utmSource = searchParams.get("utm_source") ?? attribution?.utmSource ?? "";
  const utmMedium = searchParams.get("utm_medium") ?? attribution?.utmMedium ?? "";

  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const [gclid, setGclid] = useState("");
  useEffect(() => {
    const fromUrl = searchParams.get("gclid");
    if (fromUrl) {
      document.cookie = `gclid=${fromUrl};max-age=${90 * 24 * 60 * 60};path=/`;
    }
    const fromCookie =
      document.cookie.match(/(?:^|;\s*)gclid=([^;]*)/)?.[1] ?? "";
    setGclid(fromUrl || fromCookie || "");
  }, [searchParams]);

  const formRef = useRef<HTMLFormElement>(null);
  const leadIdRef = useRef(crypto.randomUUID());

  const handleNext = () => {
    const form = formRef.current;
    if (!form) return;

    const nameFirst = (form.elements.namedItem("Name_First") as HTMLInputElement)?.value.trim();
    const nameLast = (form.elements.namedItem("Name_Last") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("Email") as HTMLInputElement)?.value.trim();
    const phone = (form.elements.namedItem("PhoneNumber_countrycode") as HTMLInputElement)?.value.trim();
    const state = (form.elements.namedItem("Dropdown") as HTMLSelectElement)?.value;
    const zip = (form.elements.namedItem("Number") as HTMLInputElement)?.value.trim();

    if (!nameFirst || !nameLast || !email || !phone || !state || !zip) {
      setError("Please complete all required contact fields.");
      return;
    }

    setError("");
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 1. Evitamos la redirección inmediata para asegurar la escritura en memoria
    e.preventDefault();
    
    const form = formRef.current;
    if (!form) return;

    const year = (form.elements.namedItem("Number1") as HTMLInputElement)?.value.trim();
    const make = (form.elements.namedItem("SingleLine") as HTMLInputElement)?.value.trim();
    const model = (form.elements.namedItem("SingleLine1") as HTMLInputElement)?.value.trim();
    const mileage = (form.elements.namedItem("Number2") as HTMLInputElement)?.value.trim();
    const terms = (form.elements.namedItem("TermsConditions") as HTMLInputElement)?.checked;

    if (!year || !make || !model || !mileage || !terms) {
      setError("Please complete vehicle information and accept the terms.");
      return;
    }

    // Recuperamos limpiamente los datos del Paso 1 que siguen en el DOM
    const nameFirst = (form.elements.namedItem("Name_First") as HTMLInputElement)?.value.trim();
    const nameLast = (form.elements.namedItem("Name_Last") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("Email") as HTMLInputElement)?.value.trim();
    const phone = (form.elements.namedItem("PhoneNumber_countrycode") as HTMLInputElement)?.value.trim();
    const state = (form.elements.namedItem("Dropdown") as HTMLSelectElement)?.value.trim();

    // GUARDAR EN LOCALSTORAGE CON ABSOLUTA CERTEZA
    localStorage.setItem("lead_uuid", leadIdRef.current);
    localStorage.setItem("first_name", nameFirst);
    localStorage.setItem("last_name", nameLast);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("state", state);
    localStorage.setItem("main_source", mainSource);
    localStorage.setItem("traffic_source", trafficSource);
    localStorage.setItem("brand", brand);

    setError("");

    // SOLUCIÓN PARA MÓVILES: Retrasar el envío nativo para asegurar la escritura en disco
    setTimeout(() => {
      form.submit();
    }, 150); 
  };

  return (
    <form
      ref={formRef}
      action="https://forms.zohopublic.com/aldobettoni/form/HowMuchCashCanIGet/formperma/_7QZPbqw75roce4FyKL16X78kNdOIebf31pErloe50U/htmlRecords/submit"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="loan-form"
    >
      
<input type="hidden" name="zf_redirect_url" value="https://apply.championcashloans.com/thankyou" />
      <input type="hidden" name="zc_gad" value={gclid} readOnly />
      <input type="hidden" name="SingleLine17" value={gclid} readOnly />

      {/* Hidden Fields del usuario */}
      <input type="hidden" name="SingleLine4" value={brand} />
      <input type="hidden" name="SingleLine10" value={partner} />
      <input type="hidden" name="SingleLine11" value={location} />
      <input type="hidden" name="SingleLine7" value={mainSource} />
      <input type="hidden" name="SingleLine12" value={trafficSource} />
      <input type="hidden" name="SingleLine13" value={utmCampaign} />
      <input type="hidden" name="SingleLine14" value={utmMedium} />
      <input type="hidden" name="SingleLine15" value={utmSource} />
      <input type="hidden" name="SingleLine3" value={leadIdRef.current} />
      <input type="hidden" name="SingleLine16" value="Fresh Lead" />
      <input type="hidden" name="SingleLine8" value="Confirm and take app" />

      {/* STEP 1 */}
      <div className={`form-step ${step === 1 ? "active" : ""}`}>
        <h2>{t.contactTitle}</h2>
<p>{t.contactDescription}</p>

<input name="Name_First" placeholder={t.firstName} />
        <input name="Name_Last" placeholder={t.lastName} />
        <input name="Email" placeholder={t.email} type="email" />
        <input name="PhoneNumber_countrycode" placeholder={t.phone} />

        <select name="Dropdown" 
          aria-label="Select State">
          <option value="">{t.selectState}</option>
          <option value="AK">AK</option>
          <option value="AZ">AZ</option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MS">MS</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WI">WI</option>
          <option value="WY">WY</option>
        </select>

        <input name="Number" type="text" placeholder={t.zipCode} />

        {error && <p className="form-error">{t.contactError}</p>}

        <button data-track="start_application" type="button" onClick={handleNext}>
          {t.continue}
        </button>
      </div>

      {/* STEP 2 */}
      <div className={`form-step ${step === 2 ? "active" : ""}`}>
        <h3>{t.vehicleTitle}</h3>

        <input name="Number1" placeholder={t.year} type="number" />
        <input name="SingleLine" placeholder={t.make} />
        <input name="SingleLine1" placeholder={t.model} />
        <input name="Number2" placeholder={t.mileage} type="number" />
        <input name="SingleLine2" placeholder={t.trim} />

        <select name="Dropdown1">
          <option value="">{t.paidOff}</option>
          <option value={t.yes}>{t.yes}</option>
          <option value={t.no}>{t.no}</option>
        </select>

        <div className="terms">
          <input type="checkbox" name="TermsConditions" id="TermsConditions" />
          <label htmlFor="TermsConditions">{t.terms}</label>
        </div>
    
        {error && <p className="form-error">{t.vehicleError}</p>}

        <div className="step-buttons">
          <button type="button" onClick={() => setStep(1)}>
            {t.back}
          </button>
          <button data-track="submit_step1" type="submit">{t.submit}</button>
        </div>
      </div>
    </form>
  );
}