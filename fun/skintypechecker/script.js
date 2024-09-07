document
  .getElementById("skinTypeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const answers = Object.fromEntries(formData.entries());

    // Count occurrences of each skin type
    const skinTypeCounts = {
      dry: 0,
      normal: 0,
      oily: 0,
      combination: 0,
      sensitive: 0,
    };

    // Tally up the answers
    for (const answer of Object.values(answers)) {
      if (skinTypeCounts.hasOwnProperty(answer)) {
        skinTypeCounts[answer]++;
      }
    }

    // Determine the most common skin type
    let skinType = Object.keys(skinTypeCounts).reduce((a, b) =>
      skinTypeCounts[a] > skinTypeCounts[b] ? a : b
    );

    // Special case for combination skin
    if (skinTypeCounts.oily > 0 && skinTypeCounts.dry > 0) {
      skinType = "combination";
    }

    // Prepare the result message
    let resultMessage = `Your skin type appears to be: ${
      skinType.charAt(0).toUpperCase() + skinType.slice(1)
    }`;

    // Add care tips based on skin type
    const careTips = {
      dry: "Use a gentle, non-foaming cleanser and rich moisturizer. Avoid hot water.",
      normal:
        "Maintain your routine with a balanced cleanser and lightweight moisturizer.",
      oily: "Use oil-free products and consider a toner. Don't skip moisturizer.",
      combination:
        "Use different products for different areas of your face. Focus on balancing oil production.",
      sensitive:
        "Opt for fragrance-free products and patch test new items. Use gentle, soothing ingredients.",
    };

    resultMessage += `\n\nCare tip: ${careTips[skinType]}`;

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = resultMessage;
    resultDiv.classList.remove("hidden");
  });
