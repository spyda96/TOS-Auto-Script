input tradeSize = 1;

def OpenPst =MACD()."Value" crosses above MACD()."ZeroLine" and RSI()."RSI" is less than or equal to 62 and RSI()."RSI" is greater than or equal to 30;

AddOrder(OrderType.BUY_TO_OPEN, OpenPst, open[-1], tradeSize, Color.CYAN, Color.CYAN, Name = "ABUY");

def exit =close()[-1] crosses BollingerBands()."UpperBand" and RSI()."RSI" is greater than or equal to 70;

AddOrder(OrderType.SELL_TO_CLOSE, exit, open[-1], tradeSize, Color.MAGENTA, Color.MAGENTA, Name = "HiSell");

def lowexit =MACD()."Value"[-1] crosses below MACD()."Avg" and RSI()."RSI" is greater than or equal to 50;

AddOrder(OrderType.SELL_TO_CLOSE, lowexit, open[-1], tradeSize, Color.MAGENTA, Color.MAGENTA, Name = "Sell");

def stop =close()[-1] crosses BollingerBands()."LowerBand";

AddOrder(OrderType.SELL_TO_CLOSE, stop, open[-1], tradeSize, Color.YELLOW, Color.YELLOW , Name = "AStop");
