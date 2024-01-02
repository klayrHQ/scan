import {Paper, Typography} from "ui";
import {CurrencyComponent} from "ui/atoms/currencyComponent/currencyComponent";
import {CurrencyCategory} from "ui/types";
import flags from "ui/assets/icons/currencyFlags";
import {Decimals} from "ui/atoms/decimals/decimals";
import {useSettings} from "../../providers/settings";
import {useDecimals} from "../../providers/currency/CurrencyProvider";

export const CurrencyContainer = () => {
  const {setSetting, parsedSettings,} = useSettings()
  const {categories, switchConvert, currencies} = useDecimals()

  return (
    <div className=" flex flex-col space-y-4 align-bottom rounded text-left overflow-hidden transform transition-all w-app mx-auto sm:align-middle sm:max-w-app sm:w-full">
      <Paper surface={1} className="px-4 flex flex-col space-y-2 py-4">
        <Typography tag={"h2"} size={"Heading4"} className={"text-onSurfaceHigh text-lg md:text-4xl font-bold"}>
          {"Select your preferable Currency!"}
        </Typography>
        <Typography tag={"span"}>{"Format the way Liskscan shows all currency values."}</Typography>
      </Paper>
      <div className="bg-surface-1 text-onSurfaceHigh w-full block rounded">
        <Decimals currencies={currencies} minMax={{min: 0, max:8}} setSetting={setSetting} switchConvert={switchConvert} parsedSettings={parsedSettings}/>
      </div>
      <div className="bg-surface-0 text-onSurfaceHigh flex flex-col space-y-4 ">
        {/*<h1 className="font-bold text-xl text-onSurfaceHigh">*/}
        {/*  Select Currency*/}
        {/*</h1>*/}
        {categories?.map((group: CurrencyCategory) => (
          <Paper surface={1}
                 key={group.category}
                 className="flex flex-col space-y-2  px-4 py-4"
          >
            <span className="font-bold text-onSurfaceHigh pl-2">
              {group.category}
            </span>
            <div className="flex flex-col  md:grid md:grid-flow-row   grid-cols-4 md:gap-2 px-2 ">
              {group?.currencies?.map((singleCurrency) => (
                <CurrencyComponent
                  selected={
                    parsedSettings?.selectedCurrency?.id === singleCurrency?.id
                  }
                  onClick={() => setSetting("selectedCurrency" ,singleCurrency)}
                  currency={singleCurrency}
                  key={`${singleCurrency?.id}-${group?.category}`}
                  flags={flags}
                />
              ))}
            </div>
          </Paper>
        ))}
      </div>
    </div>
  )
}
