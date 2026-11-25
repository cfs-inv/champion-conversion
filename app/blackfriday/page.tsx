
export default function ThanksgivingForm() {
  return (
    <div className="bf-page">
      <form
        action="https://forms.zohopublic.com/aldobettoni/form/Refinanceyourcurrentloanbrandgeta50GiftCard/formperma/V1jA2Kn7fx9R0avtMZkQgZa4GeLOZreoGljL3G51BVs/htmlRecords/submit"
        name="form"
        className="bf-form"
        id="form"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        <input type="hidden" name="SingleLine1" value="BF_CLIENTS_2026" />
        <input type="hidden" name="SingleLine3" value="Refinance" />
        <input type="hidden" name="SingleLine2" value="Refinance" />
        <input type="hidden" name="SingleLine4" value="NA" />
        <input type="hidden" name="SingleLine5" value="NA" />
        <input type="hidden" name="SingleLine6" value="NA" />
        <input type="hidden" name="SingleLine7" value="NA" />

        <h2>Refinance your current loan and get a $50 Gift Card!</h2>

        <label htmlFor="firstName">First Name *</label>
        <input
          id="firstName"
          type="text"
          name="Name_First"
          maxLength={255}
          required
        />

        <label htmlFor="lastName">Last Name *</label>
        <input
          id="lastName"
          type="text"
          name="Name_Last"
          maxLength={255}
          required
        />

        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          name="Email"
          required
        />

        <label htmlFor="phone">Phone *</label>
        <input
          id="international_PhoneNumber_countrycode"
          type="tel"
          compname="PhoneNumber"
          name="PhoneNumber_countrycode"
          phoneFormat="1"
          isCountryCodeEnabled="false"
          maxLength={20}
          required
        />

        <label htmlFor="promoCode">Promotional Code *</label>
        <input
          id="promoCode"
          type="text"
          name="SingleLine"
          maxLength={255}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
