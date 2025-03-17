
export default function Edit() {





    return (
    <div className="ny-spurning">
        <form method="post" action="/question">
            <div>
                <label >Spurning</label>
                <input type="text" id="spurning" name="spurning" required />
            </div>
            <div className="flokkur">
                <label>Flokkur  </label>
                <select id="flokkur" name="flokkur" required>
                    <option value="ble"></option>
                </select>
            </div>
            <p>Spurning verður að hafa 4 svarmöguleika, og amk eitt rétt svar</p>
            <div>
                <label>Svarmöguleiki 1</label>
                <input type="text" name="svar1" required/>
                <input type="checkbox" name="correct" value="1"/>
            </div>
            <div>
                <label>Svarmöguleiki 2</label>
                <input type="text" name="svar2" required/>
                <input type="checkbox" name="correct" value="2"/>
            </div>
            <div>
                <label>Svarmöguleiki 3</label>
                <input type="text" name="svar3" required/>
                <input type="checkbox" name="correct" value="3"/>
            </div>
            <div>
                <label>Svarmöguleiki 4</label>
                <input type="text" name="svar4" required/>
                <input type="checkbox" name="correct" value="4"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
    
}