// DatesPart.tsx
import React from "react";

interface DatesPartProps {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;

  oyear: string;
  omonth: string;
  oday: string;
  ohour: string;
  ominute: string;
  osecond: string;

  byear: string;
  bmonth: string;
  bday: string;

  lyear: string;
  lmonth: string;
  lday: string;
  lhour: string;
  lminute: string;
  lsecond: string;

  fyear: string;
  fmonth: string;
  fday: string;
  fhour: string;
  fminute: string;
  fsecond: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatesPart: React.FC<DatesPartProps> = ({ year, month, day, hour, minute, second, 
  oyear, omonth, oday, ohour, ominute, osecond, 
  byear, bmonth, bday, 
  lyear, lmonth, lday, lhour, lminute, lsecond, 
  fyear, fmonth, fday, fhour, fminute, fsecond, 
  onChange }) => {
  return (
    <div>
      <div className="divider"></div>
      <label htmlFor="CREATED_DATE" className="last-transaction-title text-black">Transaction Date:</label>
      <div className="inline-inputs" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <label htmlFor="Y_C">Y:</label>
        <input
          type="number"
          id="year_created"
          name="C_YEAR"
          value={year}
          min={2019}
          max={2019}
          placeholder="Year"
          disabled
          style={{ width: "8ch", textAlign: "center" }}
          onChange={onChange}
        />
        <label htmlFor="M_C">M:</label>
        <input
          type="number"
          id="month_created"
          name="C_MONTH"
          value={month}
          min={1}
          max={12}
          placeholder="Month"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
        <label htmlFor="D_C">D:</label>
        <input
          type="number"
          id="day_created"
          name="C_DAY"
          value={day}
          min={1}
          max={30}
          placeholder="Day"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
      </div>

      <div className="inline-inputs" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <label htmlFor="H_C">H:</label>
        <input
          type="number"
          id="hour_created"
          name="C_HOUR"
          value={hour}
          min={0}
          max={23}
          placeholder="Hour"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
        <label htmlFor="M_C">M:</label>
        <input
          type="number"
          id="minute_created"
          name="C_MINUTE"
          value={minute}
          min={0}
          max={59}
          placeholder="Minute"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
        <label htmlFor="S_C">S:</label>
        <input
          type="number"
          id="second_created"
          name="C_SECOND"
          value={second}
          min={0}
          max={59}
          placeholder="Second"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
      </div>

      {/* Opening Date */}
      <div className="divider"></div>
      <label htmlFor="OPENING_DATE" className="last-transaction-title">Account Opening Date:</label>
      <div className="inline-inputs" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <label htmlFor="Y_O">Y:</label>
        <input
          type="number"
          id="year_opening"
          name="O_YEAR"
          value={oyear}
          min={2019}
          max={2019}
          placeholder="Year"
          style={{ width: "8ch", textAlign: "center" }}
          onChange={onChange}
        />
        <label htmlFor="M_O">M:</label>
        <input
          type="number"
          id="month_opening"
          name="O_MONTH"
          value={omonth}
          min={1}
          max={12}
          placeholder="Month"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
        <label htmlFor="D_O">D:</label>
        <input
          type="number"
          id="day_opening"
          name="O_DAY"
          value={oday}
          min={1}
          max={31}
          placeholder="Day"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
      </div>

      <div className="inline-inputs" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <label htmlFor="H_O">H:</label>
        <input
          type="number"
          id="hour_opening"
          name="O_HOUR"
          value={ohour}
          min={0}
          max={23}
          placeholder="Hour"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
        <label htmlFor="M_O">M:</label>
        <input
          type="number"
          id="minute_opening"
          name="O_MINUTE"
          value={ominute}
          min={0}
          max={59}
          placeholder="Minute"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
        <label htmlFor="S_O">S:</label>
        <input
          type="number"
          id="second_opening"
          name="O_SECOND"
          value={osecond}
          min={0}
          max={59}
          placeholder="Second"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
      </div>

      {/* Birthday */}
      <div className="divider"></div>
      <label htmlFor="BIRTH_DATE" className="last-transaction-title">Birth Date:</label>
      <div className="inline-inputs" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <label htmlFor="Y_B">Y:</label>
        <input
          type="number"
          id="year_birth"
          name="B_YEAR"
          value={byear}
          min={1900}
          max={2010}
          placeholder="Year"
          style={{ width: "8ch", textAlign: "center" }}
          onChange={onChange}
        />
        <label htmlFor="M_B">M:</label>
        <input
          type="number"
          id="month_birth"
          name="B_MONTH"
          value={bmonth}
          min={1}
          max={12}
          placeholder="Month"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
        <label htmlFor="D_B">D:</label>
        <input
          type="number"
          id="day_birth"
          name="B_DAY"
          value={bday}
          min={1}
          max={31}
          placeholder="Day"
          style={{ width: "6ch", textAlign: "center" }}
          onChange={onChange}
        />
      </div>

      <div className="divider"></div>
      {/* Last Transaction Date */}
      <div className="divider"></div>
      <label htmlFor="since_last_tras" className="last-transaction-title">Last Transaction Date:</label>
      <div className="inline-inputs" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <label htmlFor="Y_S">Y:</label>
        <input
          type="number"
          id="year_last"
          name="L_YEAR"
          value={lyear}
          min={2019}
          max={2019}
          placeholder="Year"
          onChange={onChange}
          style={{ width: "8ch", textAlign: "center" }}
        />
        <label htmlFor="M_S">M:</label>
        <input
          type="number"
          id="month_last"
          name="L_MONTH"
          value={lmonth}
          min={1}
          max={12}
          placeholder="Month"
          onChange={onChange}
          style={{ width: "6ch", textAlign: "center" }}
        />
        <label htmlFor="D_S">D:</label>
        <input
          type="number"
          id="day_last"
          name="L_DAY"
          value={lday}
          min={1}
          max={30}
          placeholder="Day"
          onChange={onChange}
          style={{ width: "6ch", textAlign: "center" }}
        />
      </div>

      <div className="inline-inputs" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <label htmlFor="H_S">H:</label>
        <input
          type="number"
          id="hour_last"
          name="L_HOUR"
          value={lhour}
          min={0}
          max={23}
          placeholder="Hour"
          onChange={onChange}
          style={{ width: "6ch", textAlign: "center" }}
        />
        <label htmlFor="M_S">M:</label>
        <input
          type="number"
          id="minute_last"
          name="L_MINUTE"
          value={lminute}
          min={0}
          max={59}
          placeholder="Minute"
          onChange={onChange}
          style={{ width: "6ch", textAlign: "center" }}
        />
        <label htmlFor="S_S">S:</label>
        <input
          type="number"
          id="second_last"
          name="L_SECOND"
          value={lsecond}
          min={0}
          max={59}
          placeholder="Second"
          onChange={onChange}
          style={{ width: "6ch", textAlign: "center" }}
        />
      </div>

      {/* First Transaction Date */}
      <div className="divider"></div>
      <label htmlFor="first_transaction" className="last-transaction-title">First Transaction Date:</label>
      <div className="inline-inputs" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <label htmlFor="Y_O">Y:</label>
        <input
        
          type="number"
          id="year"
          name="MIN_YEAR"
          value={fyear}
          min={2019}
          max={2019}
          placeholder="Year"
          onChange={onChange}
          style={{ width: "8ch", textAlign: "center" }}
        />
        <label htmlFor="M_O">M:</label>
        <input
          type="number"
          id="month"
          name="MIN_MONTH"
          value={fmonth}
          min={1}
          max={12}
          placeholder="Month"
          onChange={onChange}
          style={{ width: "6ch", textAlign: "center" }}
        />
        <label htmlFor="D_O">D:</label>
        <input
          type="number"
          id="day"
          name="MIN_DAY"
          value={fday}
          min={1}
          max={30}
          placeholder="Day"
          onChange={onChange}
          style={{ width: "6ch", textAlign: "center" }}
        />
      </div>

      <div className="inline-inputs" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <label htmlFor="H_O">H:</label>
        <input
          type="number"
          id="hour"
          name="MIN_HOUR"
          value={fhour}
          min={0}
          max={23}
          placeholder="Hour"
          onChange={onChange}
          style={{ width: "6ch", textAlign: "center" }}
        />
        <label htmlFor="M_O">M:</label>
        <input
          type="number"
          id="minute"
          name="MIN_MINUTE"
          value={fminute}
          min={0}
          max={59}
          placeholder="Minute"
          onChange={onChange}
          style={{ width: "6ch", textAlign: "center" }}
        />
        <label htmlFor="S_O">S:</label>
        <input
          type="number"
          id="second"
          name="MIN_SECOND"
          value={fsecond}
          min={0}
          max={59}
          placeholder="Second"
          onChange={onChange}
          style={{ width: "6ch", textAlign: "center" }}
        />
      </div>
      <div className="divider"></div>

    </div>
  );
};

export default DatesPart;
