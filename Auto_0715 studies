input tradeSize = 1;

def OpenPst = MACD()."Value"[-1] crosses above MACD()."Avg" and close is less than BollingerBands()[-1];

AddOrder(OrderType.BUY_TO_OPEN, openPst, open[-1], tradeSize, Color.CYAN, Color.CYAN, Name = "ABUY");

def exit = close()[-1] crosses below BollingerBands()."UpperBand"[-1];

AddOrder(OrderType.SELL_TO_CLOSE, exit, open[-1], tradeSize, Color.MAGENTA, Color.MAGENTA, Name = "ASell");

def stop =  close crosses below BollingerBands().LowerBand;

AddOrder(OrderType.SELL_TO_CLOSE, stop, open[-1], tradeSize, Color.YELLOW, Color.YELLOW , Name = "AStop");
