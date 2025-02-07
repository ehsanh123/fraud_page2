import React from "react";

interface DatesPartProps {
  type: string;
  stats: string;
  CURR: string;
  COUNT: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


const SelectPart: React.FC<DatesPartProps> = ({ type, stats='COMPLETED', CURR, COUNT , onChange }) => {
    return (
    <div>
      <div className="divider"></div> {/* Divider before the CREATED_DATE section */}
      
      <label htmlFor="TYPE">TYPE:</label>
      <select id="TYPE" name="TYPE" onChange={onChange} value={type}>
        {["CARD_PAYMENT", "TOPUP", "EXCHANGE", "FEE", "TRANSFER", "ATM"].map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      
      <input type="hidden" name="STATE" value={stats || "COMPLETED"} />
      <p ></p>
      <label htmlFor="COUNTRY">COUNTRY:</label>
        <select id="COUNTRY" name="COUNTRY" onChange={onChange} value={COUNT}>
        {["GB", "BG", "IE", "PL", "FR", "CZ", "PT", "LT", "RO", "CH", "ES", "NL", "HU", "SK", 
        "DE", "NO", "SE", "DK", "CY", "IT", "AT", "IS", "MT", "BE", "LU", "HR", "GF", "LV", "JE",
         "FI", "EE", "GR", "SI", "AU", "RE", "MQ", "GI", "GG", "PF", "NC", "YT", "IM", "GP", "LI",
          "BM", "SG", "KY", "BL", "SX", "VG", "MF", "AW", "CW", "GL", "US", "PM", "FK"].map((country) => (
          <option key={country} value={country}
          >{country}</option>
        ))}
      </select>
      <p ></p>
      <label htmlFor="CURRENCY">CURRENCY:</label>
        <select id="CURRENCY" name="CURRENCY" onChange={onChange} value={CURR}>
        {["GBP", "PLN", "RON", "EUR", "HUF", "BGN", "CZK", "SEK", "USD", "SGD", "CHF", "HRK", "NOK", 
        "JPY", "CAD", "UAH", "DKK", "TRY", "BTC", "PEN", "AED", "AUD", "BYN", "MYR", "RSD", "SCR", "IDR",
         "HKD", "PHP", "MAD", "RUB", "ETH", "NZD", "ISK", "ZAR", "INR", "MXN", "XPF", "SAR", "COP", "THB",
          "ALL", "TWD", "ILS", "GEL", "MKD", "XRP", "BRL", "ARS", "KRW", "EGP", "CRC", "CLP", "VND", 
          "TZS", "BAM", "QAR", "BBD", "BCH", "KZT", "CNY", "LTC", "AWG", "XCD", "MUR", "SRD", "MDL", 
          "ZMW", "BSD", "BOB", "GHS", "DOP", "LKR", "TND", "MMK", "KES", "ETB", "JOD", "XOF", "MOP", 
          "MGA", "MNT", "OMR", "CVE", "GMD", "LBP", "MWK", "BHD", "NAD", "BDT", "GTQ", "PKR", "AMD", 
          "NGN", "HNL", "JMD", "LAK", "BWP", "XAF", "MZN", "AZN", "FJD", "BND", "BZD", "VES", "DZD", 
          "UZS", "NPR", "KGS", "MVR"].map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      
      <div className="divider"></div> {/* Divider before the CREATED_DATE section */}
    </div>
  );
};

export default SelectPart;
