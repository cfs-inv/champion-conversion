
declare module "react" {
  interface InputHTMLAttributes<T> {
    compname?: string;
    phoneFormat?: string;
    isCountryCodeEnabled?: string;
  }
}

type PromotionFormProps = {
  campaign: "thanksgiving" | "blackfriday";
};

export default function PromotionForm({ campaign }: PromotionFormProps) {
  const isThanksgiving = campaign === "thanksgiving";

  const pageClass = isThanksgiving ? "tg-page" : "bf-page";
  const formClass = isThanksgiving ? "tg-form" : "bf-form";

  const campaignId = isThanksgiving
    ? "TG_CLIENTS_2026"
    : "BF_CLIENTS_2026";

  const heading = isThanksgiving
    ? "Refinance your current loan and get a $50 Gift Card!"
    : "Black Friday Bonus: Get a $50 Gift Card!";

  return (
    <div className={pageClass}>
      <form
        action="https://forms.zohopublic.com/aldobettoni/form/Refinanceyourcurrentloanbrandgeta50GiftCard/formperma/V1jA2Kn7fx9R0avtMZkQgZa4GeLOZreoGljL3G51BVs/htmlRecords/submit"
        name="form"
        className={formClass}
        id={`form-${campaign}`}
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        <input type="hidden" name="SingleLine1" value={campaignId} />
        <input type="hidden" name="SingleLine3" value="Refinance" />
        <input type="hidden" name="SingleLine2" value="Refinance" />
        <input type="hidden" name="SingleLine4" value="NA" />
        <input type="hidden" name="SingleLine5" value="NA" />
        <input type="hidden" name="SingleLine6" value="NA" />
        <input type="hidden" name="SingleLine7" value="NA" />

        <h2>{heading}</h2>

        <label htmlFor={`${campaign}-firstName`}>First Name *</label>
        <input
          id={`${campaign}-firstName`}
          type="text"
          name="Name_First"
          maxLength={255}
          required
        />

        <label htmlFor={`${campaign}-lastName`}>Last Name *</label>
        <input
          id={`${campaign}-lastName`}
          type="text"
          name="Name_Last"
          maxLength={255}
          required
        />

        <label htmlFor={`${campaign}-email`}>Email *</label>
        <input
          id={`${campaign}-email`}
          type="email"
          name="Email"
          required
        />

        <label htmlFor={`${campaign}-phone`}>Phone *</label>
        <input
          id={`${campaign}-phone`}
          type="tel"
          compname="PhoneNumber"
          name="PhoneNumber_countrycode"
          phoneFormat="1"
          isCountryCodeEnabled="false"
          maxLength={20}
          required
        />

        <label htmlFor={`${campaign}-promoCode`}>Promotional Code *</label>
        <input
          id={`${campaign}-promoCode`}
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
