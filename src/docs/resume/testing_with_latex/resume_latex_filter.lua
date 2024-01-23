function Div(el)
    if el.classes:includes("center") then
      return pandoc.RawBlock('latex', '\\begin{centeredcontent}') ..
             el.content ..
             pandoc.RawBlock('latex', '\\end{centeredcontent}')
    end
  end