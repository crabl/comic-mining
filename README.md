Comic Book Value Criteria
-------------------------
Pros

1. Look for first appearances of seminal characters.
   - Return all first appearances of characters in a series
   - /api/search/?api_key=[key]&format=json&resources=issue&query=batman
   comic_list = []
   for(book in series):
      comic_list += [ComicModel(series.name, book.title)]

2. Consider the age of the comic book. Older comic books are more because of their age and relative rarity to newer comics. 
   Comics published during the Platinum and Golden Ages are particularly valuable.
   Comics less than 20 years old have more intrinsic than monetary value to collectors.
   a. The Platinum Age (1897 to 1933)
   b. The Golden Age (1933 to 1955)
   c. The Silver Age (1956 to 1969)
   d. The Bronze Age (1970 to 1985)
   e. The Iron Age or Modern Age (1986 to present)
3. Consider the historical context of the comic book when it was published.
4. Look for older comics in good condition. 

Cons

1. Avoid special reprint comics. 
2. Variant covers.
3. Shipping new comics pre-bagged.
4. Gimmick covers.

From: http://www.wikihow.com/Buy-and-Sell-Comic-Books (I know, shitty source, but you have to start somewhere...)
