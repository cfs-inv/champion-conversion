"use client";

import { useState, useRef, useEffect } from "react";

export default function LoanFormStep2() {
  const formRef = useRef<HTMLFormElement>(null);

  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [leadUUID, setLeadUUID] = useState("");
  

  const [storedData, setStoredData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
  });

  const [amount, setAmount] = useState("");
  const [ssn, setSsn] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [rentOrOwn, setRentOrOwn] = useState("-Select-");
  const [rentAmount, setRentAmount] = useState("");
  const [occupation, setOccupation] = useState("");
  const [salary, setSalary] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerPhone, setEmployerPhone] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");

  const [dobMonth, setDobMonth] = useState("");
  const [dobDay, setDobDay] = useState("");
  const [dobYear, setDobYear] = useState("");
  const [finalDob, setFinalDob] = useState("");

  const [resYears, setResYears] = useState("");
  const [resMonths, setResMonths] = useState("");
  const [empYears, setEmpYears] = useState("");
  const [empMonths, setEmpMonths] = useState("");

  // SOLUCIÓN: Función centralizada para cargar datos frescos de localStorage
  const loadFreshLocalStorageData = () => {
    const uuid = localStorage.getItem("lead_uuid") ?? "";
    const firstName = localStorage.getItem("first_name") ?? "";
    const rawLastName = localStorage.getItem("last_name") ?? "";
    const lastName = rawLastName.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, "").trim();
    const phone = localStorage.getItem("phone") ?? "";
    const email = localStorage.getItem("email") ?? "";
    const state = localStorage.getItem("state") ?? "";

    setLeadUUID(uuid);
    setStoredData({ firstName, lastName, phone, email, state });
    setLoading(false);
  };

  useEffect(() => {
    // 1. Carga inicial al montar el componente
    loadFreshLocalStorageData();

    // 2. Escuchar cuando la ventana vuelve a ganar foco (por ejemplo, al volver de una pestaña de redirección de Zoho)
    window.addEventListener("focus", loadFreshLocalStorageData);
    
    return () => {
      window.removeEventListener("focus", loadFreshLocalStorageData);
    };
  }, []);

  useEffect(() => {
    if (dobMonth && dobDay && dobYear) {
      setFinalDob(`${dobMonth}/${dobDay}/${dobYear}`);
    } else {
      setFinalDob("");
    }
  }, [dobMonth, dobDay, dobYear]);

  const monthsList = [
    { value: "01", label: "January" }, { value: "02", label: "February" },
    { value: "03", label: "March" },   { value: "04", label: "April" },
    { value: "05", label: "May" },     { value: "06", label: "June" },
    { value: "07", label: "July" },    { value: "08", label: "August" },
    { value: "09", label: "September" },{ value: "10", label: "October" },
    { value: "11", label: "November" }, { value: "12", label: "December" }
  ];

  const daysList = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));
  const currentYear = new Date().getFullYear();
  const dobYearsList = Array.from({ length: 75 }, (_, i) => String((currentYear - 18) - i));

  const menuYears = Array.from({ length: 21 }, (_, i) => String(i));
  const menuMonths = Array.from({ length: 12 }, (_, i) => String(i));

  const handleNext = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!street || !city || !zipCode || !storedData.state || !finalDob || !resYears || rentOrOwn === "-Select-") {
        setError("Please complete all required fields, including address and housing status.");
        return;
      }
      setError("");
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = formRef.current;
    if (!form) return;

    const terms = (form.querySelector('[name="TermsConditions"]') as HTMLInputElement)?.checked;

    if (!empYears || !terms) {
      e.preventDefault();
      setError("Please complete your employment duration and accept the Terms and Conditions.");
      return;
    }
    
    setError("");
  };

  if (loading) {
    return (
      <div className="loan-form" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
        <p>Loading application...</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action="https://forms.zohopublic.com/aldobettoni/form/CLEXStep2NextJS/formperma/QarpyJTHkUTvcz-GyPTo7R0fSqNDlN6DRjZLxf8zHPw/htmlRecords/submit"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      className="loan-form"
      onSubmit={handleSubmit}
    >
      {/* (Mapeos Zoho) */}
      <input type="hidden" name="zf_referrer_name" value="" />
      {/* Cambia el valor vacío por la URL de App Completed */}
<input type="hidden" name="zf_redirect_url" value="https://apply.championcashloans.com/appcompleted" />
      <input type="hidden" name="zc_gad" value="" />
      <input type="hidden" name="SingleLine7" value={leadUUID} />
      <input type="hidden" name="SingleLine8" value="Sent personal Info (Form 2)" />
      <input type="hidden" name="Name_First" value={storedData.firstName} />
      <input type="hidden" name="Name_Last" value={storedData.lastName} />
      <input type="hidden" name="PhoneNumber_countrycode" value={storedData.phone} />
      <input type="hidden" name="Email" value={storedData.email} />
      <input type="hidden" name="Currency2" value={amount} />
      <input type="hidden" name="Date" value={finalDob} />
      <input type="hidden" name="SingleLine9" value={ssn} />
      <input type="hidden" name="SingleLine11" value={street} />
      <input type="hidden" name="SingleLine12" value={city} />
      <input type="hidden" name="SingleLine13" value={zipCode} />
      <input type="hidden" name="SingleLine14" value={storedData.state} />
      <input type="hidden" name="Number" value={resYears} />
      <input type="hidden" name="Dropdown" value={rentOrOwn} />
      <input type="hidden" name="Currency1" value={rentAmount} />
      <input type="hidden" name="SingleLine6" value={occupation} />
      <input type="hidden" name="Number1" value={empYears} />
      <input type="hidden" name="Currency" value={salary} />
      <input type="hidden" name="SingleLine5" value={employerName} />
      <input type="hidden" name="PhoneNumber1_countrycode" value={employerPhone} />
      <input type="hidden" name="SingleLine10" value={employerAddress} />

      {/* ================= PANTALLA 1: CONFIRMACIÓN ================= */}
      {step === 1 && (
        <div className="form-step active">
          <h2>Verify your profile</h2>
          <p>We'll use this information to continue your loan application.</p>
          <div className="confirmation-fields">
            <label>First Name</label><input value={storedData.firstName} readOnly className="input-disabled" />
            <label>Last Name</label><input value={storedData.lastName} readOnly className="input-disabled" />
            <label>Phone</label><input value={storedData.phone} readOnly className="input-disabled" />
            <label>Email</label><input value={storedData.email} readOnly className="input-disabled" />
          </div>
          <button data-track="startapp_step2" type="button" onClick={handleNext} className="btn-confirm">Continue →</button>
          <p>Need to make a change?</p>
          <p>You can return to the main application and resubmit your contact information or wait to be contacted by an agent.</p>
        </div>
      )}

      {/* ================= PANTALLA 2: HOGAR Y DIRECCIÓN ================= */}
      {step === 2 && (
        <div className="form-step active">
          <h3>Personal & Home Information</h3>

          <div className="currency-input" style={{ marginBottom: '15px' }}>
            <span>$</span>
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} maxLength={50} placeholder="Desired Loan Amount" />
          </div>
          
          <label style={{ fontSize: '14px', marginBottom: '5px', display: 'block', color: '#FFF' }}>Date of Birth *</label>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <select value={dobMonth} onChange={(e) => setDobMonth(e.target.value)} style={{ flex: 1.5, padding: '10px' }}>
              <option value="">Month</option>
              {monthsList.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
            </select>
            <select value={dobDay} onChange={(e) => setDobDay(e.target.value)} style={{ flex: 1, padding: '10px' }}>
              <option value="">Day</option>
              {daysList.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select value={dobYear} onChange={(e) => setDobYear(e.target.value)} style={{ flex: 1.2, padding: '10px' }}>
              <option value="">Year</option>
              {dobYearsList.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <input type="text" value={ssn} onChange={(e) => setSsn(e.target.value)} maxLength={255} placeholder="Social Security Number (XXX-XX-XXXX)" style={{ marginBottom: '15px' }} />

          <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} maxLength={255} placeholder="Street Address *" style={{ marginBottom: '10px' }} />
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} maxLength={255} placeholder="City *" style={{ marginBottom: '10px' }} />
          <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} maxLength={255} placeholder="Zip Code *" style={{ marginBottom: '15px' }} />
          
          <div className="input-disabled" style={{ padding: '10px', background: '#666', borderRadius: '8px', marginBottom: '15px' }}>
            {storedData.state || "Not provided"}
          </div>

          <label style={{ fontSize: '14px', marginBottom: '5px', display: 'block', color: '#fff' }}>Years in Residence? *</label>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <select value={resYears} onChange={(e) => setResYears(e.target.value)} style={{ flex: 1, padding: '10px' }}>
              <option value="">Years</option>
             {menuYears.map(y => <option key={y} value={y}>{y} {y === "1" ? "year" : "years"}</option>)}
            </select>
            <select value={resMonths} onChange={(e) => setResMonths(e.target.value)} style={{ flex: 1, padding: '10px' }}>
              <option value="">Months</option>
              {menuMonths.map(m => <option key={m} value={m}>{m} {m === "1" ? "month" : "months"}</option>)}
            </select>
          </div>

          <select 
            name="Dropdown"
            value={rentOrOwn} 
            onChange={(e) => setRentOrOwn(e.target.value)} 
            style={{ padding: '10px', width: '100%', marginBottom: '15px' }}
          >
            <option value="-Select-">Do you Rent or Own? *</option>
            <option value="I Rent">I Rent</option>
            <option value="I Own">I Own</option>
          </select>

          <div className="currency-input" style={{ marginBottom: '15px' }}>
            <span>$</span>
            <input type="text" value={rentAmount} onChange={(e) => setRentAmount(e.target.value)} maxLength={50} placeholder="Rent or Mortgage Amount" />
          </div>

          {error && <p className="form-error">{error}</p>}
          <div className="step-buttons">
            <button type="button"  onClick={() => setStep(1)}>← Back</button>
            <button type="button" className="btn-confirm" onClick={handleNext}>Continue →</button>
          </div>
        </div>
      )}

      {/* ================= PANTALLA 3: EMPLEO INFO ================= */}
      {step === 3 && (
        <div className="form-step active">
          <h3>Employment Information</h3>

          <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} maxLength={255} placeholder="Occupation" style={{ marginBottom: '15px' }} />

          <label style={{ fontSize: '14px', marginBottom: '5px', display: 'block', color: '#fff' }}>Years in Employment *</label>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <select value={empYears} onChange={(e) => setEmpYears(e.target.value)} style={{ flex: 1, padding: '10px' }}>
              <option value="">Years</option>
              {menuYears.map(y => <option key={y} value={y}>{y} {y === "1" ? "year" : "years"}</option>)}
            </select>
           <select value={empMonths} onChange={(e) => setEmpMonths(e.target.value)} style={{ flex: 1, padding: '10px' }}>
              <option value="">Months</option>
              {menuMonths.map(m => (
                <option key={m} value={m}>
                  {m} {m === "1" ? "month" : "months"}
                </option>
              ))}
            </select>
          </div>

          <div className="currency-input" style={{ marginBottom: '15px' }}>
            <span>$</span>
            <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} maxLength={50} placeholder="Monthly Salary" />
          </div>

          <input type="text" value={employerName} onChange={(e) => setEmployerName(e.target.value)} maxLength={255} placeholder="Employer Name" style={{ marginBottom: '10px' }} />
          <input type="text" value={employerPhone} onChange={(e) => setEmployerPhone(e.target.value)} maxLength={20} placeholder="Employer's Phone ((XXX) XXX-XXXX)" style={{ marginBottom: '10px' }} />
          <input type="text" value={employerAddress} onChange={(e) => setEmployerAddress(e.target.value)} maxLength={255} placeholder="Employment's Address (Street, City, State, Zip)" style={{ marginBottom: '15px' }} />

          <div className="terms">
            <input type="checkbox" name="TermsConditions" id="TermsConditions2" />
            <label htmlFor="TermsConditions2">I accept the Terms and Conditions</label>
          </div>

          {error && <p className="form-error">{error}</p>}
          <div className="step-buttons">
            <button type="button" onClick={() => setStep(2)}>← Back</button>
            <button data-track="submit_step2" type="submit">Submit Application</button>
          </div>
        </div>
      )}
    </form>
  );
}