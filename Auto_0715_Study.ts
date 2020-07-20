#Code below is for 1st Order triggers Order Cancels Other.

#Copy to OPEN order and use the option code for the strike price change .SPY to .SPY200720C320 for CALL side. 
MACD()."Value"[-1] crosses above MACD()."Avg";

#Copy to CLOSE order, same as above
Close()[-1] crosses below BollingerBands()."UpperBand"[-1];

#Copy to StopLoss order, same as above  
Close crosses below BollingerBands().LowerBand;
