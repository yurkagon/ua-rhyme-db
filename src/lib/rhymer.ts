import StaticDatabase, { Rhyme } from "../services/StaticDatabase";

class Rhymer {
  private static GROUPS = {
    vowels: ["а", "е", "є", "и", "і", "о", "у", "ю", "я", "ї"],
    consonantsSonorousOnly: ["л", "м", "н", "р", "й"],
    consonantsSonorous: ["б", "в", "г", "д", "з", "ж"],
    consonantsMuffled: ["к", "п", "с", "ф", "т", "ш", "щ", "х", "ц", "ч"],
  };

  private static GROUPS_IDS = {
    vowels: 4,
    consonantsSonorousOnly: 3,
    consonantsSonorous: 2,
    consonantsMuffled: 1,
  };

  public  static findRhymes(string: string) {
    const result = [...this.findByEnd(string), ...this.findByStart(string)];

    return result;
  }

  public static findByStart(string) {
    return this.find(string, false);
  }

  public static findByEnd(string) {
    return this.find(string, true);
  }

  private static find(string, end = true) {
    if (!string || typeof string !== "string") {
      return [];
    }

    var inputString = string.replace(" ", '').replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    );

    if (inputString.length < 1) {
      return [];
    }

    var result: Rhyme[] = [];
    var parsed = Rhymer.parseString(inputString);
    var pattern = Rhymer.getRegExp(parsed, 2, end);

    for (let wordData of StaticDatabase.getRhymeWords()) {
      const trimmed = wordData.label.trim();

      if (
        pattern.test(trimmed) &&
        trimmed.toLowerCase() !== inputString.toLowerCase()
      ) {
        result.push({
          ...wordData,
          algorithmic: true,
        });
      }
    }

    return result;
  }

  private static getRegExp(str, num = 1, end = true) {
    var keys = [];
    var set = [];
    var reverse = [...str].reverse();
    var pattern = "";

    for (var i = 0; i < num; i++) {
      keys.push(i);
    }

    for (var key of keys) {
      set.push(end ? reverse[key] : str[key]);
    }

    if (end) {
      set = set.reverse();
    }

    pattern = end ? set.join("") + "$" : "^" + set.join("");

    return new RegExp(pattern, "iu");
  }

  private static parseString(string) {
    var result = "";
    var stringByGroupIds = {};
    var strLen = Rhymer.mbStrlen(string);
    var symbols = string.split("");

    if (symbols.length < 1) {
      return [];
    }

    for (var key = 0; key < symbols.length; key++) {
      var word = symbols[key];
      var found = false;

      for (var groupKey of Object.keys(Rhymer.GROUPS)) {
        var group = Rhymer.GROUPS[groupKey];

        var isInGroup = group.includes(word.toLowerCase());
        if (isInGroup) {
          stringByGroupIds[key] = Rhymer.GROUPS_IDS[groupKey];
          found = true;
          break;
        }
      }

      if (!found) {
        stringByGroupIds[key] = symbols[key];
      }
    }

    for (var k of Object.keys(stringByGroupIds)) {
      var groupId = stringByGroupIds[+k];
      var nextGroupId =
        strLen === +k + 1 ? stringByGroupIds[+k] : stringByGroupIds[+k + 1];

      if (
        groupId - nextGroupId == 0 &&
        nextGroupId == Rhymer.GROUPS_IDS["vowels"]
      ) {
        result += symbols[k] + (strLen !== +k + 1 ? "-" : "");
      } else {
        if (!Rhymer.isNumeric(nextGroupId) || groupId - nextGroupId <= 0) {
          result += symbols[+k];
        } else {
          result += symbols[+k] + "-";
        }
      }
    }

    return result.split("-");
  }

  private static mbStrlen(str) {
    return str.replace(/[\u{FE00}-\u{FE0F}]/gu, "").length;
  }

  private static isNumeric(value) {
    return !isNaN(value - parseFloat(value));
  }
}

export default Rhymer;
